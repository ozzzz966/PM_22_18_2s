import {Component, Input, OnInit} from '@angular/core';
import {ReferenceItemComponent} from '../reference-item/reference-item.component';
import {InfoService} from '../service/service.component';
import {Contacts, Reference} from '../service/dto_interfaces';

@Component({
  selector: 'app-reference',
  imports: [
    ReferenceItemComponent
  ],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.css'
})
export class ReferenceComponent implements OnInit {
  references: any;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.infoService.getReference().subscribe((data: Reference[]) => {
      this.references = data;
    });
  }
}
