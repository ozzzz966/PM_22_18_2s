import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {InfoService} from '../service/service.component';
import {EducationItemComponent} from '../educationItem/educationItem.component';
import {Education} from '../service/dto_interfaces';

@Component({
  selector: 'app-education',
  imports: [
    EducationItemComponent
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  education: any;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.infoService.getEducation().subscribe((data: Education[]) => {
      this.education = data;
    });
  }
}
