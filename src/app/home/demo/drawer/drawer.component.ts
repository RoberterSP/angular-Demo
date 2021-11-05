import {
  NgModule, Component, ViewChild, enableProdMode, OnInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule,
} from 'devextreme-angular';
import { List, Service } from './../service/app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  providers: [Service],
  preserveWhitespaces: true,
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;

  navigation: List[];

  showSubmenuModes: string[] = ['slide', 'expand'];

  positionModes: string[] = ['left', 'right'];

  showModes: string[] = ['push', 'shrink', 'overlap'];

  text: string;

  selectedOpenMode = 'shrink';

  selectedPosition = 'left';

  selectedRevealMode = 'slide';

  isDrawerOpen = true;

  elementAttr: any;

  constructor(service: Service) {
    this.text = service.getContent();
    this.navigation = service.getNavigationList();
  }

  ngOnInit() {}

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    },
  }];

}
