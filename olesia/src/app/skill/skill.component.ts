import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input() data: any;
}
