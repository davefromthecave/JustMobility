import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {RideInformation} from "./ride-information";
@Injectable({
  providedIn: 'root'
})
export class RideInformationService {
// Define API
  apiURL = 'http://justmobility-kilt-lb-1783645189.us-east-2.elb.amazonaws.com';
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
// HttpClient API get() method => Fetch RideInformation list
  getRideInformations(): Observable<RideInformation> {
    return this.http.get<RideInformation>(this.apiURL + '/rideinformation/')
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
