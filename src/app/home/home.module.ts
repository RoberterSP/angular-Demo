import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../share/share.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
            path: 'render-page',
            loadChildren: () => {
                return import('./renderPage/render-page.module.module').then(m => m.RenderPageModuleModule);
            }
        },
        {
          path: 'demo',
          loadChildren: () => {
            return import('./demo/demo.module.module').then(m => m.DemoPageModuleModule)
          }
        },
        {
          path: 'operation',
          loadChildren: () => {
            return import('./operation/operation-page.module.module').then(m => m.OperationPageModuleModule)
          }
        }
        
    ]
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModuleModule { }
