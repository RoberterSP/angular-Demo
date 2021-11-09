import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DxTextBoxModule, DxTextAreaModule } from 'devextreme-angular';
import { SharedModule } from 'src/app/share/share.module';
import { DefineDependencyInjectorComponent } from './dependency-injector/define-dependency-injector/define-dependency-injector.component';
import { InitDependencyInjectorComponent } from './dependency-injector/init-dependency-injector/init-dependency-injector.component';


const routes: Routes = [
  {path: '', redirectTo: 'main'},
  {
    path: 'DI-define',
    component: DefineDependencyInjectorComponent,
  },
  {
    path: 'DI-init',
    component: InitDependencyInjectorComponent,
  },
];

@NgModule({
  declarations: [
    DefineDependencyInjectorComponent,
    InitDependencyInjectorComponent
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxTextAreaModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class OperationPageModuleModule { }
