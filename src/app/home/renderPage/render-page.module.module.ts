import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';

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
    SecondComponent,
    ThirdComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RenderPageModuleModule { }
