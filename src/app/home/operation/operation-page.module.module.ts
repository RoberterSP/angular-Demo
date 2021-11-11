import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DxTextBoxModule, DxTextAreaModule } from 'devextreme-angular';
import { SharedModule } from 'src/app/share/share.module';
import { DefineDependencyInjectorComponent } from './dependency-injector/define-dependency-injector/define-dependency-injector.component';
import { InitDependencyInjectorComponent } from './dependency-injector/init-dependency-injector/init-dependency-injector.component';
import { OperationMainComponent } from './main/main.component';
import { OperationSkepselfComponent } from './skepself/skepself.component';
import { OperationHostComponent } from './host/host.component';


const routes: Routes = [
  {path: '', redirectTo: 'DI-main'},
  {
    path: 'DI-define',
    component: DefineDependencyInjectorComponent,
  },
  {
    path: 'DI-init',
    component: InitDependencyInjectorComponent,
  },
  {
    path: 'DI-main',
    component: OperationMainComponent,
  },
];

@NgModule({
  declarations: [
    DefineDependencyInjectorComponent,
    InitDependencyInjectorComponent,
    OperationMainComponent,
    OperationSkepselfComponent,
    OperationHostComponent
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OperationPageModuleModule { }
