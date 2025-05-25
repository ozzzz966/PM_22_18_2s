import { Component } from '@angular/core';
import {ExperienceComponent} from '../experience/experience.component';
import {ReferenceComponent} from '../reference/reference.component';
import {InterestsComponent} from '../interests/interests.component';

@Component({
  selector: 'app-right-collumn',
  imports: [
    ExperienceComponent,
    ReferenceComponent,
    InterestsComponent
  ],
  templateUrl: './right-collumn.component.html',
  styleUrl: './right-collumn.component.css'
})
export class RightCollumnComponent {

}
