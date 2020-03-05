import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {personalDetails} from '../../../model/personalDetail'
import { MatInputModule } from '@angular/material';
import { CascadeCSCService } from 'src/app/services/cascade-csc.service';
import {PersonalDetailService} from 'src/app/services/personal-detail.service';
import { PersonalDetailAlertService } from 'src/app/services/personal-detail-alert.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  formGroup: FormGroup;
@ViewChild('formGroup',{static:true}) public FormGroup;

  
  countries: {};
  states: {};
  cities: {};
  isChecked=false;
  _ObservaleResidenceAddress;
  sendModel:personalDetails= new personalDetails();
  // **********************************************
  
  constructor(private frmbuilder: FormBuilder,
              private csc:CascadeCSCService ,
              private pds:PersonalDetailService ,
              private _alert:PersonalDetailAlertService,
              private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.createForm();
    // this.csc.getCountries().subscribe(
    //   data => this.countries = data);
    
  }
  createForm()
  {this.formGroup = this.frmbuilder.group({
    
   
    'fname':['hehe', [Validators.required]],
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
console.log("in onNext");
this.sendModel.firstName=this.formGroup.controls.fname.value;
this.sendModel.middleName=this.formGroup.controls.mname.value;
this.sendModel.lastName=this.formGroup.controls.lname.value;
this.sendModel.maidenName=this.formGroup.controls.fmname.value;
this.sendModel.dateOfBirth=this.formGroup.controls.dob.value;
this.sendModel.gender=this.formGroup.controls.gender.value;
this.sendModel.fathersName=this.formGroup.controls.fatherName.value;
this.sendModel.phoneNumber= this.formGroup.controls.mobileNumber.value;
this.sendModel.socialSecurityNumber=this.formGroup.controls.socialSecurityNumber.value;
this.sendModel.nationality=this.formGroup.controls.nationality.value;
this.sendModel.maritalStatus=this.formGroup.controls.maritalStatus.value;



this.sendModel.address =   [{
  residenceNo: this.formGroup.controls.currentResidenceNumber.value, 
  building:this.formGroup.controls.currentStreet.value, 
  prominentLandmark:this.formGroup.controls.currentProminentLandmark.value,
  pinCode:this.formGroup.controls.currentPincode.value,
  city:this.formGroup.controls.cityCurrent.value,
  state:this.formGroup.controls.stateCurrent.value,
  startDate:this.formGroup.controls.currentAddressStart.value,
  endDate:this.formGroup.controls.currentAddressEnd.value
}];
this.sendModel.address.push({
  residenceNo: this.formGroup.controls.permanentResidenceNumber.value, 
  building:this.formGroup.controls.permanentStreet.value, 
  prominentLandmark:this.formGroup.controls.permanentProminentLandmark.value,
  pinCode:this.formGroup.controls.permanentPincode.value,
  city:this.formGroup.controls.cityPermanent.value,
  state:this.formGroup.controls.statePermanent.value,
  startDate:this.formGroup.controls.permanentAddressStart.value,
  endDate:this.formGroup.controls.permanentAddressEnd.value
});
console.log(JSON.stringify(this.sendModel));
//this.pds.postPersonalDetails(this.sendModel);

}
OnClick()
{
  this.router.navigate(['/enterEmail'])
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

