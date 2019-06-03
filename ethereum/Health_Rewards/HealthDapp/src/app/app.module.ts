import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ParticlesModule } from 'angular-particle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetGoalComponent } from './set-goal/set-goal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';


import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';
import { GoalsComponent } from './goals/goals.component';
import { HomelandingComponent } from './homelanding/homelanding.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SetGoalComponent,
    LandingPageComponent,
    GoogleLoginComponent,
    HeaderComponent,
    FooterComponent,
    GoalsComponent,
    HomelandingComponent
  ],
  imports: [

    MatGridListModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    ParticlesModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, MatCheckboxModule,MatSelectModule,
  Ng4LoadingSpinnerModule.forRoot(),
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule,HttpClientModule,
    routing
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
