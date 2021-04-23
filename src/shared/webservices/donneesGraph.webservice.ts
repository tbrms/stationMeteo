import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonneesGraphWebService {

  public donneesTemperature!: Observable<any[]>;
  public donneesPression!: Observable<any[]>;


  baseUrl : string;
  requeteTemperature = 'temperatureSeries/';
  requetePression = 'pressionSeries/';
  requeteHumidite = 'humiditeSeries/';
  nombreElements = 24;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
   }

  getTemperatures(): Observable<any[]> {
    console.log('DonneesGraphWebService.getTemperatures()');
    return this.getDonnees(this.requeteTemperature);
  }

  getPressions(): Observable<any[]> {
    console.log('DonneesGraphWebService.getPressions()');
    return this.getDonnees(this.requetePression);
  }

  getHumidites(): Observable<any[]> {
    console.log('DonneesGraphWebService.getHumidites()');
    return this.getDonnees(this.requeteHumidite);
  }

  getDonnees(requete : string): Observable<any[]> {
    console.log('DonneesGraphWebService.getDonnees: ',requete);
    return this.http.get<any[]>(this.baseUrl+requete+this.nombreElements)
    .pipe(
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Erreur dans DonneesGraphWebService', error);
    return throwError('Essayer plus tard');
  }
}