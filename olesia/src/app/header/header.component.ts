import {Component, Input, OnInit} from '@angular/core';
import {InfoService} from '../service/service.component';
import {Contacts, HeaderInfo} from '../service/dto_interfaces';
import {headerData} from '../service/data_info';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  headerData: any;

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.infoService.getHeader().subscribe((data: HeaderInfo) => {
      this.headerData = data;
    });
  }
}
