import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { EnterEmailComponent } from './component/enter-email/enter-email.component';
import { ForgotPassConfirmPassComponent } from './component/forgot-pass-confirm-pass/forgot-pass-confirm-pass.component';
import { PersonalDetailsComponent } from './feature-module/component/personal-details/personal-details.component';
import { PersonalDetailAlertService } from './services/personal-detail-alert.service';


const routes: Routes = [
  { path: 'enterEmail', component:EnterEmailComponent }, 
  { path: 'forgotPassword/:token', component:ForgotPassConfirmPassComponent }, 
  { path: 'loginPage', component: LoginComponent },
  {path:'personaldetail',component:PersonalDetailsComponent,
  canDeactivate: [PersonalDetailAlertService]}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
