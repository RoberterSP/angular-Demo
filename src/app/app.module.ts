import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SharedModule } from './share/share.module';
import { InMemoryDataService } from './auth/in-memory-data.service';
import { AuthService } from './auth/auth.service';
import { HttpErrorHandler } from './auth/http-error-handler.service';
import { MessageService } from './auth/message.service';
import { RequestCache, RequestCacheWithMap } from './auth/request-cache.service';
import { httpInterceptorProviders } from './home/demo/http-demo/http-interceptors';

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
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    )
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
