import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {RideMetaInformation} from "./ride-meta-information";
@Injectable({
  providedIn: 'root'
})
export class RideMetaInformationService {
// Define API
  apiURL = 'http://mylb-1550207048.us-east-2.elb.amazonaws.com';
  constructor(private http: HttpClient) { }
  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/
// Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
// HttpClient API get() method => Fetch RideMetaInformation list
  getRideMetaInformations(): Observable<RideMetaInformation> {
    return this.http.get<RideMetaInformation>(this.apiURL + '/ridemetainformation/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
// HttpClient API get() method => Fetch RideMetaInformation
  getRideMetaInformation(id): Observable<RideMetaInformation> {
    return this.http.get<RideMetaInformation>(this.apiURL + '/ridemetainformation/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
// HttpClient API post() method => Create RideMetaInformation
  createRideMetaInformation(RideMetaInformation): Observable<RideMetaInformation> {
    return this.http.post<RideMetaInformation>(this.apiURL + '/ridemetainformation', JSON.stringify(RideMetaInformation), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
// Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
