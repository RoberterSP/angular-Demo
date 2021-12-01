import { Component, OnInit } from '@angular/core';
import { Service } from '../service/app.service';

@Component({
  providers:[Service],
  selector: 'app-layout-common',
  templateUrl: './layout-common.component.html',
  styleUrls: ['./layout-common.component.scss']
})
export class LayoutCommonComponent implements OnInit {
  extraMenu = [
    {
      path: 'form',
      name: 'form'
    },
    {
      path: 'drawer',
      name: 'drawer'
    },
    {
      path: 'popup',
      name: 'popup'
    },
    {
      path: 'tab-panel',
      name: 'tabPanel'
    }
  ]
  constructor(
    public service: Service
  ) { }

  ngOnInit() {
    this.service.init()
  }

}
