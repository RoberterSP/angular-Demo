import { Component, OnInit } from '@angular/core';
import { AppDemoDataService } from '../service/app-data-service.service';
import { Service } from '../service/app.service';

@Component({
  providers:[Service, AppDemoDataService],
  selector: 'app-layout-common',
  templateUrl: './layout-common.component.html',
  styleUrls: ['./layout-common.component.scss']
})
export class LayoutCommonComponent implements OnInit {
  extraMenu = [
    {
      path: 'params',
      name: 'params'
    },
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
    },
    {
      path: 'defined-component-css',
      name: 'definedComponentCss'
    },
    {
      path: 'datagrid',
      name: 'datagrid'
    },
    {
      path: 'httpclient',
      name: 'httpclient'
    },
    {
      path: 'chart',
      name: 'chart'
    },
    {
      path: 'pie',
      name: 'pie'
    },
    {
      path: 'dynamic',
      name: 'dynamic'
    },
    {
      path: 'node',
      name: 'node'
    },
    {
      path: 'step',
      name: 'step'
    },
    {
      path: 'btn',
      name: 'btn'
    },
    {
      path: 'interSection',
      name: 'interSection'
    }
  ]
  constructor(
    public service: Service,
    public demoDataService: AppDemoDataService
  ) { }

  ngOnInit() {
    this.service.init()
    this.demoDataService.initView()
  }

}
