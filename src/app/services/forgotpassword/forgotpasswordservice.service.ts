import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgotPwdModel } from '../../model/forgot-pwd-model';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})

export class ForgotpasswordserviceService {
  private linktest = "http://localhost:4200/forgotPassword/";
  private endpoint = "http://10.188.200.225:8080/sendemail";

  
constructor(private http: HttpClient,
  private httpWrapperService: HttpWrapperService,) { }
  sendemail( token,email):Observable<any>
  {
    
    let link = this.linktest.concat(token);
    return this.httpWrapperService.PostJson({
      "to":email,
      "subject":"TEKSystems Reset Password Link",
      "templateID":"ForgotPassword",
      "resetLinkUrl":link
    }, this.endpoint);
       
    
  };
}