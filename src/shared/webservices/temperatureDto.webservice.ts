import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureDtoWebService {

  public temperatureDtoSeries!: Observable<any[]>;

  baseUrl = 'http://localhost:8080/meteodev/temperatureSeries/';
  nombreElements = 24;

  constructor(private http: HttpClient) {
   }

  getLastBulletinMeteo(): Observable<any[]> {
    console.log("getLastBulletinMeteo: debut");
    this.temperatureDtoSeries =  this.http.get<any[]>(this.baseUrl+this.nombreElements)
      .pipe(
        catchError((error) => this.handleError(error))
      );

      console.log("getLastBulletinMeteo: fin avant return");
      return this.temperatureDtoSeries;
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Erreur dans TemperatureDtoWebService', error);

    return throwError('Essayer plus tard');
  }
}