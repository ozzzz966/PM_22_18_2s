import {Component, Input, OnInit} from '@angular/core';
import {EducationComponent} from "../education/education.component";
import {SkillComponent} from '../skill/skill.component';
import {InfoService} from '../service/service.component';
import {Education, Skill} from '../service/dto_interfaces';

@Component({
  selector: 'app-expertise',
  imports: [
    SkillComponent
  ],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent implements OnInit {
  expertise: any;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.infoService.getSkills().subscribe((data: Skill[]) => {
      this.expertise = data;
    });  }
}
