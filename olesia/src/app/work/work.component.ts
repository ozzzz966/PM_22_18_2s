import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  @Input() job: any;
  protected readonly console = console;
}
