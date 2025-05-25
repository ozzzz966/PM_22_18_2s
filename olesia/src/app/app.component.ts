import { Component } from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LeftCollumnComponent} from './left-collumn/left-collumn.component';
import {RightCollumnComponent} from './right-collumn/right-collumn.component';
import {ToastrService} from 'ngx-toastr';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {NavComponent} from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
