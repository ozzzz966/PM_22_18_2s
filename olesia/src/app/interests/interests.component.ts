import {Component, Input, OnInit} from '@angular/core';
import {ReferenceItemComponent} from "../reference-item/reference-item.component";
import {InterestItemComponent} from '../interest-item/interest-item.component';
import {InfoService} from '../service/service.component';
import {Contacts, Interest} from '../service/dto_interfaces';

@Component({
  selector: 'app-interests',
  imports: [
    InterestItemComponent
  ],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent implements OnInit {
  interests: any;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.infoService.getInterests().subscribe((data: Interest[]) => {
      this.interests = data;
    });
  }
}
