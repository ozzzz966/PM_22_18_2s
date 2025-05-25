import {Component, Input, OnInit} from '@angular/core';
import {WorkComponent} from '../work/work.component';
import {InfoService} from '../service/service.component';
import {Education, Job} from '../service/dto_interfaces';

@Component({
  selector: 'app-experience',
  imports: [
    WorkComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  works: any;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.infoService.getJobs().subscribe((data: Job[]) => {
      this.works = data;
    });
  }
}
