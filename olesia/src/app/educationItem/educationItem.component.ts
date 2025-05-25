import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-educationItem',
  imports: [],
  templateUrl: './educationItem.component.html',
  styleUrl: './educationItem.component.css'
})
export class EducationItemComponent {
  @Input() education: any;

}

