import {
  NgModule, Component, ViewChild, enableProdMode, OnInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule,
} from 'devextreme-angular';
import { Observable, observable, Subject } from 'rxjs';
import { List, Service } from './../service/app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
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

  dataUpdate1 = new Subject();

  constructor(
    public service: Service,
    public activatedRoute: ActivatedRoute,
    public router: Router
    ) {
    this.text = service.getContent();
    this.navigation = service.getNavigationList();
  }
  goform(e: any) {
    e.stopPropagation()
    const arr = [
      {
        id:1,
        name: 'name'
      },
      {
        id:2,
        name: 'name2'
      }
    ]
    this.router.navigateByUrl('/home/demo/form', { state:  {data: { arr: arr } }});
  }
  ngOnInit() {
    this.dataUpdate1.next({
      falg: 1
    })
  }
  changeServiceData() {
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    },
  }];

}
