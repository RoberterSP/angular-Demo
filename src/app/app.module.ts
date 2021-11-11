import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SharedModule } from './share/share.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
        {
            path: 'home',
            loadChildren: () => {
                return import('./home/home.module').then(m => m.HomeModuleModule);
            }
        }
    ]
  },
];
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forChild(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
