import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {VehicleInformation} from "./vehicle-information";
@Injectable({
  providedIn: 'root'
})
export class VehicleInformationService {
// Define API
  apiURL = 'http://mylb-1550207048.us-east-2.elb.amazonaws.com/';
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
// HttpClient API get() method => Fetch VehicleInformation list
  getVehicleInformations(): Observable<VehicleInformation> {
    return this.http.get<VehicleInformation>(this.apiURL + '/vehicleinformation/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
// HttpClient API get() method => Fetch VehicleInformation
  getVehicleInformation(id): Observable<VehicleInformation> {
    return this.http.get<VehicleInformation>(this.apiURL + '/vehicleinformation/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
// HttpClient API post() method => Create VehicleInformation
  createVehicleInformation(VehicleInformation): Observable<VehicleInformation> {
    return this.http.post<VehicleInformation>(this.apiURL + '/vehicleinformation', JSON.stringify(VehicleInformation), this.httpOptions)
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
