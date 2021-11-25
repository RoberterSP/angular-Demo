import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { ObserverComponent } from '../observer/observer/observer.component';
import { OperatorsBasicComponent } from '../operators/basic/basic.component';
import { ObserverableComponent } from '../observer/observerable/observerable.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/share/share.module';
const routes: Routes = [
  {path: '', redirectTo: 'observer'},
  {
    path: 'observer',
    component: ObserverComponent,
  },
  {
    path: 'observerable',
    component: ObserverComponent,
  },
  {
    path: 'operator',
    component: OperatorsBasicComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RxjsComponent,
    ObserverComponent,
    ObserverableComponent,
    OperatorsBasicComponent,
  ]
})
export class RxjsModule { }
