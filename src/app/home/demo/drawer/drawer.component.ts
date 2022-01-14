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
import { ToolService } from 'src/app/share/utils/tool.service';
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

  arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]

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
    console.log(ToolService.ArrayToTree(this.arr))
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
