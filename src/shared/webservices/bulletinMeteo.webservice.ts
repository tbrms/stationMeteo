import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BulletinMeteo } from '../models/bulletinMeteo.model';
import { environment } from 'src/environments/environment';

import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulletinMeteoWebService {

  public dernierBulletin : BulletinMeteo | undefined;
  baseUrl : string;

  requete = 'getBulletinMeteoExtInstantane';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
   }

  getLastBulletinMeteo(): Observable<BulletinMeteo> {
    return this.http.get<BulletinMeteo>(this.baseUrl+this.requete)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('UserWebService error', error);

    return throwError('Something bad happened; please try again later.');
  }

}