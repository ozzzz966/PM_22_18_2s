import { Component } from '@angular/core';
import {EducationItemComponent} from '../educationItem/educationItem.component';
import {EducationComponent} from '../education/education.component';
import {ExpertiseComponent} from '../expertise/expertise.component';
import {LeftFooterComponent} from '../left-footer/left-footer.component';

@Component({
  selector: 'app-left-collumn',
  imports: [
    EducationComponent,
    ExpertiseComponent,
    LeftFooterComponent
  ],
  templateUrl: './left-collumn.component.html',
  styleUrl: './left-collumn.component.css'
})
export class LeftCollumnComponent {

}
