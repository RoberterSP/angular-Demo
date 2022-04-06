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
import { DemoBarChartComponent } from './chart/chart.component';
import { DynamicComponentComponent } from './dynamic/dynamic-component/dynamic-component.component';
import { AppDynamicBannerComponent } from './dynamic/dynamic-component/dynamic-layout-component';
import { AdDirective } from './dynamic/ad.directive';
import { DemoPieChartComponent } from './chart/pie.component';
import { CC4DemoNodeComponent } from './node/node.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DemoStepsComponent } from './steps/steps.component';
import { DemoParamsComponent } from './params/params.component';


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
        path: 'params',
        component: DemoParamsComponent,
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
         component: DemoBarChartComponent
       },
       {
         path: 'dynamic',
         component: AppDynamicBannerComponent
       },
       {
         path: 'pie',
         component: DemoPieChartComponent
       },
       {
        path: 'node',
        component: CC4DemoNodeComponent
      },
      {
        path: 'step',
        component: DemoStepsComponent
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
    DemoBarChartComponent,
    DynamicComponentComponent,
    AppDynamicBannerComponent,
    DemoPieChartComponent,
    AdDirective,
    CC4DemoNodeComponent,
    DemoStepsComponent,
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    NzStepsModule,
    DxTextAreaModule,
    NgxPageScrollCoreModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DemoPageModuleModule { }
