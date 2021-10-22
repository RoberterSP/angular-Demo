import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { DxTextBoxModule, DxTextAreaModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/share-module/share-module.module';


const routes: Routes = [
  {path: '', redirectTo: 'main'},
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'case',
    component: SecondComponent,
  },
  {
    path: 'match-family',
    component: ThirdComponent,
  },
  {
    path: 'main',
    component: MainComponent
  },
];

@NgModule({
  declarations: [
    FirstComponent,
    ThirdComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class RenderPageModuleModule { }
