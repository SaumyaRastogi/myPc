import { Injectable } from '@angular/core';
import { HttpClient,  HttpResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CascadeCSCService {
  apiUrl='';
  //api base url + controller Name/FunctionName
  constructor(private http: HttpClient ) {}
  getCountries()
  {
   return this.http.get('this.apiUrl/Country')
  }
  getStates(countryId:number)
  {
   return this.http.get('this.apiUrl/State/countryId')
  }
  getCities(stateId:number)
  {
   return this.http.get('this.apiUrl/City/stateId')
  }
}
