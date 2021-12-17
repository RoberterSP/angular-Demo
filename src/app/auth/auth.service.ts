import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toBase64 } from '../share/utils/basic.tool';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';

// Put Account in the header
const name = 'admintest@mcttechnology.com'
const password = 'ztan134524'
const base64Params = toBase64(`${name}:${password}`);
const authorization = `Basic ${base64Params}`;

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  private readonly api_url = environment.url;
  handleError: HandleError;
  apiToken: any;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }
  getAuthorizationToken() {
    return authorization;
  }
  public getNewAppToken(): Observable<any> {
    const id = environment.app_id;
    const code = environment.app_secret;
    const url = `${this.api_url}cc_auth`;
    const base64Params = toBase64(`${id}:${code}`);
    const authorization = `Basic ${base64Params}`;
    const headers = new HttpHeaders({ Authorization: authorization });
    return this.http.post(url, { Provider: 'appverify' }, { headers }).pipe(
      map((res: any) => {
        this.apiToken = res.Token;
        return res.Token;
      }),
    );
  }

  // workspace module initial
  public getApiToken(autoRefresh = false): Observable<any> {
    if (autoRefresh || !this.apiToken) {
      return this.getNewAppToken();
    }
    return of(this.apiToken);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/