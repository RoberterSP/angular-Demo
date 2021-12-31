import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ObserverComponent } from './observer/observer/observer.component';
import { OperatorsBasicComponent } from './operators/basic/basic.component';
import { ObserverableComponent } from './observer/observerable/observerable.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/share/share.module';
import { AppSearchBarComponent } from './app-search-bar/app-search-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
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
    path: 'obser-new',
    component: ObserverableComponent,
  },
  {
    path: 'operator',
    component: OperatorsBasicComponent,
  },
  {
    path: 'search-bar',
    component: AppSearchBarComponent,
  },
  
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
    AppSearchBarComponent,
    ProgressBarComponent,
  ]
})
export class RxjsModule { }
