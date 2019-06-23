import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {CustomerInformation} from "./customer-information";
@Injectable({
  providedIn: 'root'
})
export class CustomerInformationService {
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
// HttpClient API get() method => Fetch CustomerInformation list
  getCustomerInformations(): Observable<CustomerInformation> {
    return this.http.get<CustomerInformation>(this.apiURL + '/customerinformation/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
// HttpClient API get() method => Fetch CustomerInformation
  getCustomerInformation(id): Observable<CustomerInformation> {
    return this.http.get<CustomerInformation>(this.apiURL + '/customerinformation/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
// HttpClient API post() method => Create CustomerInformation
  createCustomerInformation(CustomerInformation): Observable<CustomerInformation> {
    return this.http.post<CustomerInformation>(this.apiURL + '/customerinformation', JSON.stringify(CustomerInformation), this.httpOptions)
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
