import { Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {NavComponent} from './nav/nav.component';


export const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'login', loadComponent: () => import('../app/sign-in/sign-in.component').then(m => m.SignInComponent) },
  { path: 'register', loadComponent: () => import('../app/sign-up/sign-up.component').then(m => m.SignUpComponent) },
  { path: 'cv', loadComponent: () => import('../app/cv/cv.component').then(m => m.CvComponent), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
