import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../share-module/share-module.module';

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
        }
    ]
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModuleModule { }
