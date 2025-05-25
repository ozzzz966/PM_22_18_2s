import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {LeftCollumnComponent} from "../left-collumn/left-collumn.component";
import {RightCollumnComponent} from "../right-collumn/right-collumn.component";
import {NavComponent} from '../nav/nav.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cv',
  imports: [
    HeaderComponent,
    LeftCollumnComponent,
    RightCollumnComponent,
    NavComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

  constructor(private router: Router) {}

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
