import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hero } from './hero';
import { HttpErrorHandler, HandleError } from 'src/app/auth/http-error-handler.service';
import { toBase64 } from 'src/app/share/utils/basic.tool';
import { environment } from 'src/environments/environment';
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
export class HeroesService {
  base_url = 'api/heroes';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.base_url)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Hero[]>(this.base_url, options)
      .pipe(
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addHero(body: any): Observable<any> {
    return this.http.post<any>(this.base_url, body, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', body))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<unknown> {
    const url = `${this.base_url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateHero(hero: Hero): Observable<Hero> {
    // httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Hero>(this.base_url, hero, httpOptions)
      .pipe(
        catchError(this.handleError('updateHero', hero))
      );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/