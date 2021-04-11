import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BulletinMeteo } from '../models/bulletinMeteo.model';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulletinMeteoWebService {

  public dernierBulletin : BulletinMeteo;

  //baseUrl = 'http://thsrms.com:3535/meteo/getBulletinMeteoNow';
  baseUrl = 'http://localhost:8080/meteodev/getBulletinMeteoNow';

  constructor(private http: HttpClient) {
    this.dernierBulletin = new BulletinMeteo('1','2021-02-01',20,1024,80); 
   }

  getLastBulletinMeteo(): Observable<BulletinMeteo> {
    return this.http.get<BulletinMeteo>(this.baseUrl)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('UserWebService error', error);

    return throwError('Something bad happened; please try again later.');
  }

}