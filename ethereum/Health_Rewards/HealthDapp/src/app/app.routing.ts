import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetGoalComponent } from './set-goal/set-goal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { GoalsComponent } from './goals/goals.component';
import { HomelandingComponent } from './homelanding/homelanding.component';


export const appRoutes: Routes = [

    { path: '', redirectTo: "Home", pathMatch: "full" },
    { path: 'Home', component: LandingPageComponent, pathMatch: "full" },
    { path: 'Dashboard', component: DashboardComponent, pathMatch: "full" },
    { path: 'SetGoal', component: SetGoalComponent, pathMatch: "full" },
    { path: 'set', component: HomeComponent, pathMatch: "full" },
    { path: 'oauth', component: GoogleLoginComponent, pathMatch: "full" },
    { path: 'goals', component: GoalsComponent, pathMatch: "full" },
    { path: 'grid', component: HomelandingComponent, pathMatch: "full" }

];

export const routing = RouterModule.forRoot(appRoutes);