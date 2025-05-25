import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {Skill, Job, Contacts, Reference, Education, Interest, HeaderInfo} from './dto_interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl = 'http://localhost:3100';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.message}`;
    } else {
      errorMessage = `Server error: ${error.message}`;
    }

    this.toastr.error(errorMessage, 'API Error', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-center',
      tapToDismiss: true
    });

    return throwError(() => new Error(errorMessage));
  }

  getLanguages(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/languages`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getHobbies(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/hobbies`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiUrl}/education`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getReference(): Observable<Reference[]> {
    return this.http.get<Reference[]>(`${this.apiUrl}/reference`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(`${this.apiUrl}/contacts`).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  getInterests(): Observable<Interest[]> {
    return this.http.get<Interest[]>(`${this.apiUrl}/interests`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getHeader(): Observable<HeaderInfo> {
    return this.http.get<HeaderInfo>(`${this.apiUrl}/headerData`).pipe(
      catchError(this.handleError.bind(this))
    );
  }
}
