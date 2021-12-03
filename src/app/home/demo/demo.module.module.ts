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
    DemoDatagridComponent
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
