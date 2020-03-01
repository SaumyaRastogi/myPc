import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {personalDetails} from '../../../model/personalDetail'
import { MatInputModule } from '@angular/material';
import { CascadeCSCService } from 'src/app/services/cascade-csc.service';
import {PersonalDetailService} from 'src/app/services/personal-detail.service';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  formGroup: FormGroup;
  countries: {};
  states: {};
  cities: {};
  isChecked=false;
  _ObservaleResidenceAddress;
  sendModel:personalDetails= new personalDetails();

  
  constructor(private frmbuilder: FormBuilder,
              private csc:CascadeCSCService ,
              private pds:PersonalDetailService ) { }

  ngOnInit() {
    this.createForm();
    // this.csc.getCountries().subscribe(
    //   data => this.countries = data);
    
  }
  createForm()
  {this.formGroup = this.frmbuilder.group({
    
   
    'fname':['', [Validators.required]],
    'lname': [null],
    'mname': [null],
    'fmname': [null],
    'fatherName':[null],
    'mobileNumber':[null],
    'socialSecurityNumber':[null],
    'currentResidenceNumber':[null],
    'currentStreet':[null],
    'currentProminentLandmark':[null],
    'currentPincode':[null],
    'picker1': [null],
    'picker2': [null],
    'picker3': [null],
    'picker4': [null],
    'picker5': [null],
    'permanentResidenceNumber':[null],
    'permanentStreet':[null],
   'permanentProminentLandmark':[null],
   'permanentPincode':[null],
   'state':[null] ,
  'city':[null],
  'checkBox':[false] });
}

copyData()
{
if(!this.formGroup.controls.checkBox.value)
{ 
  this.formGroup.controls.permanentResidenceNumber.setValue(this.formGroup.controls.currentResidenceNumber.value);
  this._ObservaleResidenceAddress = this.formGroup.controls.currentResidenceNumber
  .valueChanges.subscribe( value => this.formGroup.controls.permanentResidenceNumber.setValue(value))
    
//console.log(this.formGroup.controls.permanentResidenceNumber);
  
}
else{
  this._ObservaleResidenceAddress.unsubscribe()
}
}

onNext()
{
this.sendModel.firstName=this.formGroup.controls.fname.value;
this.pds.postPersonalDetails(this.sendModel);

}





  // onChangeCountry(countryId: number) {
  //   if (countryId) {
  //     this.csc.getStates(countryId).subscribe(
  //       data => {
  //         this.states = data;
  //         this.cities = null;
  //       }
  //     );
  //   } else {
  //     this.states = null;
  //     this.cities = null;
  //   }
  // }

  // onChangeState(stateId: number) {
  //   if (stateId) {
  //     this.csc.getCities(stateId).subscribe(
  //       data => this.cities = data
  //     );
  //   } else {
  //     this.cities = null;
  //   }
  // }


}

