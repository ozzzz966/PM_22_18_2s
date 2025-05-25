import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NavComponent,
  ],
})
export class SignInComponent implements OnInit {
  SignInForm: FormGroup;
  isAuthenticated = false;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private toastr: ToastrService) {
    this.SignInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{6,}$/;
    if (!regex.test(password)) {
      return { invalidPassword: 'Пароль має містити мінімум 6 символів, 1 велику літеру, 1 маленьку літеру і 1 цифру' };
    }
    return null;
  }

  ngOnInit(){
    this.isAuthenticated = !!localStorage.getItem('user');
    if (this.isAuthenticated) {
      this.router.navigate(['/cv']);
    }
  }

  onSubmit() {
    if (this.SignInForm.valid) {
      this.http.post('http://localhost:3000/auth/login', this.SignInForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.isAuthenticated = true;

          this.router.navigate(['/cv']);

          this.toastr.success(
            'Successfully logged in',
            'Success',
            {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-center',
              tapToDismiss: false
            }
          );
        },
        error: (error) => {
          const errorMessage = error?.error?.error || 'Помилка Входу';
          this.toastr.error(errorMessage, 'API Error', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-center',
            tapToDismiss: false
          });
        }
      });
    }
  }
}
