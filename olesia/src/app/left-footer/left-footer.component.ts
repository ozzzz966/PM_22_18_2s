import {Component, Input, OnInit} from '@angular/core';
import {ContactComponent} from '../contact/contact.component';
import {InfoService} from '../service/service.component';
import {Contacts, Education} from '../service/dto_interfaces';

@Component({
  selector: 'app-left-footer',
  imports: [
    ContactComponent
  ],
  templateUrl: './left-footer.component.html',
  styleUrl: './left-footer.component.css'
})
export class LeftFooterComponent implements OnInit {
  contacts: any;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.infoService.getContacts().subscribe((data: Contacts[]) => {
      this.contacts = data;
    });
  }
}
