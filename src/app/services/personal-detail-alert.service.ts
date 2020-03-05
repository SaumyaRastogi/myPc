import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PersonalDetailsComponent } from '../feature-module/component/personal-details/personal-details.component';


@Injectable({
  providedIn: 'root'
})
export class PersonalDetailAlertService 
implements CanDeactivate<PersonalDetailsComponent>
{

  constructor() { }
  
  canDeactivate(component: PersonalDetailsComponent): boolean {
    console.log(component.formGroup.dirty)
    console.log("here + ")
    return component.formGroup.dirty 
                ? confirm('Are you sure you want to discard your changes?') 
                : true;  

}
  
}