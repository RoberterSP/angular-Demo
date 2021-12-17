import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { toBase64 } from 'src/app/share/utils/basic.tool';
export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
// Put Account in the header
const name = 'admintest@mcttechnology.com'
const password = 'ztan134524'
const base64Params = toBase64(`${name}:${password}`);
const authorization = `Basic ${base64Params}`;
const httpOptions = {
  headers: new HttpHeaders({
    Authorization: authorization,
    'Content-Type':  'application/json',
    'X-Param-Override-CustomerCode': environment.customerCode,
    'X-CC-AppId': environment.app_id,
  })
};
@Injectable()
export class ConfigService {
  configUrl = 'assets/config.json';
  // 获取环境变量的 url 配置信息
  private readonly api_url = environment.url;
  private readonly custom = environment.customerCode;

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
    /** POST: add a new hero to the database */
    get_auth(hero: any) {
       this.http.post<any>(`${this.api_url}cc_auth`, hero, httpOptions)
        .pipe(
          catchError(this.handleError)
        ).subscribe(r => {
          if (!r.Token) {
            this.get_auth({
              Provider: 'appverify'
            })
          }
          
        })
    }

  getConfig_1() {
    return this.http.get<Config>(this.configUrl);
  }

  getConfig_2() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

  getConfig_3() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/