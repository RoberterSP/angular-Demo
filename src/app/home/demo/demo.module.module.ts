import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DxTextBoxModule, DxTextAreaModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/share/share.module';
import { DrawerComponent } from './drawer/drawer.component';
import { PopupComponent } from './popup/popup.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { FormComponent } from './form/form.component';
import { LayoutCommonComponent } from './layout-common/layout-common.component';
import { DefinedComponentCssComponent } from './defined-component-css/defined-component-css.component';
import { DemoDatagridComponent } from './datagrid/datagrid.component';
import { DemoHttpClientComponent } from './http-demo/http-client/http-client.component';
import { ConfigComponent } from './http-demo/config/config.component';
import { DownloaderComponent } from './http-demo/downloader/downloader.component';
import { MessagesComponent } from './http-demo/messages/messages.component';
import { PackageSearchComponent } from './http-demo/package-search/package-search.component';
import { HeroesComponent } from './http-demo/heroes/heroes.component';
import { UploaderComponent } from './http-demo/uploader/uploader.component';
import { DemoChartComponent } from './chart/chart.component';


const routes: Routes = [
  {path: '', redirectTo: 'drawer'},
  {
    path: '',
    component: LayoutCommonComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'drawer',
        component: DrawerComponent,
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'popup',
        component: PopupComponent,
      },
      {
        path: 'tab-panel',
        component: TabPanelComponent,
      },
      {
        path: 'html-editor',
        component: HtmlEditorComponent
      },
      {
        path: 'defined-component-css',
        component: DefinedComponentCssComponent
      },
       {
         path: 'datagrid',
         component: DemoDatagridComponent
       },
       {
         path: 'httpclient',
         component: DemoHttpClientComponent
       },
       {
         path: 'chart',
         component: DemoChartComponent
       }
    ]
  },
];

@NgModule({
  declarations: [
    DrawerComponent,
    PopupComponent,
    TabPanelComponent,
    HtmlEditorComponent,
    LayoutCommonComponent,
    FormComponent,
    DefinedComponentCssComponent,
    DemoDatagridComponent,
    DemoHttpClientComponent,
    ConfigComponent,
    DownloaderComponent,
    HeroesComponent,
    MessagesComponent,
    UploaderComponent,
    PackageSearchComponent,
    DemoChartComponent,
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DemoPageModuleModule { }
