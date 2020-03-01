import { MatSnackBar,MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { NgMaterialModuleModule } from './ng-material-module/ng-material-module.module';
import { CommonModuleModule } from './common-module/common-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { EnterEmailComponent } from './component/enter-email/enter-email.component';
import { FormsModule } from '@angular/forms';
import { ForgotPassConfirmPassComponent } from './component/forgot-pass-confirm-pass/forgot-pass-confirm-pass.component';
import { MatToolbarModule, MatRippleModule, MatSnackBarModule, MatFormFieldModule,MatInputModule} from '@angular/material';
import { PersonalDetailsComponent } from './feature-module/component/personal-details/personal-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnterEmailComponent,
    ForgotPassConfirmPassComponent,  
    PersonalDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModuleModule,
    NgMaterialModuleModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatRippleModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    

  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
