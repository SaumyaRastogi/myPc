import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { PreBoardingComponent } from './component/preboarding/pre-boarding.component';
import { OnBoardingComponent } from './component/onboarding/on-boarding.component';
import { NotificationComponent } from './component/notification/notification.component';
import { HrDashboardComponent } from './component/hr-dashboard/hr-dashboard.component';
import { PersonalDetailsComponent } from './component/personal-details/personal-details.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    HrDashboardComponent, 
    UserDashboardComponent, 
    PreBoardingComponent, 
    OnBoardingComponent, 
    NotificationComponent, PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeatureModuleModule { }
