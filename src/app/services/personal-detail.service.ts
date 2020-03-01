import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailService {
  private endpoint = "http://10.188.200.225:8080/Bhoom'sEndPoint";
  constructor(private httpWrapperService: HttpWrapperService) {
   }

   postPersonalDetails(model:any){
    return this.httpWrapperService.PostJson( model , this.endpoint );
   }
}
