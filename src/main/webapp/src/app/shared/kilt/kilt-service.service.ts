import { Injectable } from '@angular/core';
import {Claim, Identity, RequestForAttestation} from "@kiltprotocol/sdk-js";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CustomerInformation} from "../customerinformation/customer-information";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {RideInformation} from "../rideInformation/ride-information";

@Injectable({
  providedIn: 'root'
})
export class KiltServiceService {

  apiURL = 'http://justmobility-kilt-lb-1783645189.us-east-2.elb.amazonaws.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  rideCType = JSON.parse('{\n' +
    '  "schema": {\n' +
    '    "$id": "jmrideinformation",\n' +
    '    "$schema": "http://kilt-protocol.org/draft-01/ctype#",\n' +
    '    "properties": {\n' +
    '      "time": {\n' +
    '        "type": "string"\n' +
    '      },\n' +
    '      "date": {\n' +
    '        "type": "string"\n' +
    '      },\n' +
    '      "distance": {\n' +
    '        "type": "number"\n' +
    '      },\n' +
    '      "startgeolocation": {\n' +
    '        "type": "string"\n' +
    '      },\n' +
    '      "endgeolocation": {\n' +
    '        "type": "string"\n' +
    '      },\n' +
    '      "gasusageperkm": {\n' +
    '        "type": "number"\n' +
    '      },\n' +
    '      "co2kg": {\n' +
    '        "type": "number"\n' +
    '      }\n' +
    '    },\n' +
    '    "type": "object"\n' +
    '  },\n' +
    '  "metadata": {\n' +
    '    "title": {\n' +
    '      "default": "Just Mobility Ride Information"\n' +
    '    },\n' +
    '    "description": {},\n' +
    '    "properties": {\n' +
    '      "time": {\n' +
    '        "title": {\n' +
    '          "default": "time"\n' +
    '        }\n' +
    '      },\n' +
    '      "date": {\n' +
    '        "title": {\n' +
    '          "default": "date"\n' +
    '        }\n' +
    '      },\n' +
    '      "distance": {\n' +
    '        "title": {\n' +
    '          "default": "distance"\n' +
    '        }\n' +
    '      },\n' +
    '      "startgeolocation": {\n' +
    '        "title": {\n' +
    '          "default": "start geolocation"\n' +
    '        }\n' +
    '      },\n' +
    '      "endgeolocation": {\n' +
    '        "title": {\n' +
    '          "default": "end geolocation"\n' +
    '        }\n' +
    '      },\n' +
    '      "gasusageperkm": {\n' +
    '        "title": {\n' +
    '          "default": "gas usage per km"\n' +
    '        }\n' +
    '      },\n' +
    '      "co2kg": {\n' +
    '        "title": {\n' +
    '          "default": "co2 kg"\n' +
    '        }\n' +
    '      }\n' +
    '    }\n' +
    '  },\n' +
    '  "owner": "5Cyt9PbPspL33pa7GRK2SjxC2grynQx5RMGB2aYeRBeumhgD",\n' +
    '  "hash": "0x6aa9eb3b80995406e64135337226886bd96b6e58c3bcc26461862b3f9ea3429c"\n' +
    '}');

  constructor(private http: HttpClient) { }

  sendRideClaim(rideInformation: RideInformation
                ): Observable<RequestForAttestation>{

    const mnemonic = 'gift reward rally weapon outer enemy bottom hunt unhappy power auction copper';
    const claimer = Identity.buildFromMnemonic(mnemonic);

    const rawClaim = {
      time: rideInformation.time,
      date: rideInformation.date,
      distance: rideInformation.distance,
      startgeolocation: rideInformation.startGeolocation,
      endgeolocation: rideInformation.endGeolocation,
      gasusageperkm: rideInformation.gasUsagePerKm,
      co2kg: rideInformation.co2Kg
    };

    const claim = new Claim(this.rideCType, rawClaim, claimer);
    const requestForAttestation = new RequestForAttestation(claim, [], claimer);
    console.log(JSON.stringify(requestForAttestation));

    return this.http.post<RequestForAttestation>(this.apiURL + '/attest', JSON.stringify(requestForAttestation), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
