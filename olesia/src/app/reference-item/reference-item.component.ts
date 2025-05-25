import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-reference-item',
  imports: [],
  templateUrl: './reference-item.component.html',
  styleUrl: './reference-item.component.css'
})
export class ReferenceItemComponent {
  @Input() reference: any
}
