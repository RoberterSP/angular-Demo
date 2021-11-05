import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DxTextBoxModule, DxTextAreaModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/share/share.module';
import { DrawerComponent } from './drawer/drawer.component';
import { PopupComponent } from './popup/popup.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';


const routes: Routes = [
  {path: '', redirectTo: 'drawer'},
  {
    path: 'drawer',
    component: DrawerComponent,
  },
  {
    path: 'popup',
    component: PopupComponent,
  },
  {
    path: 'tab-panel',
    component: TabPanelComponent,
  }
];

@NgModule({
  declarations: [
    DrawerComponent,
    PopupComponent,
    TabPanelComponent
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class DemoPageModuleModule { }
