import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-interest-item',
  imports: [],
  templateUrl: './interest-item.component.html',
  styleUrl: './interest-item.component.css'
})
export class InterestItemComponent {
  @Input() interest: any;
}
