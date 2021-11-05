import { RenderService, RenderPage } from '../service/render-page.service';
import { Service } from '../service/reader.api.service';
import {
  NgModule, Component, enableProdMode, ChangeDetectionStrategy, OnInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDataGridModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  providers: [Service],
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  isMultiline: boolean = true;
  valueContent!: string;
  dataSource: any;
  constructor(
    private srevice: RenderService,
    private servicedata: Service
    
  ) { 
    this.valueContent = servicedata.getMarkup();
    
  }

  ngOnInit(): void {
    const that = this
    // this.dataSource = new CustomStore({
    //   key: 'id',
    //   load(params) {
    //     return that.servicedata.generateData(1000000);
    //   },
    // });
    this.dataSource = that.servicedata.generateData(1000000)
    
    
  }
  goPage() {
    this.srevice.updatePage(RenderPage.Third)
  }
  backPage() {
    this.srevice.updatePage(RenderPage.First)
  }

}