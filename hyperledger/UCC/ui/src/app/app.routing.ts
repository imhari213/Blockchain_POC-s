import { RouterModule, Routes } from '@angular/router';

import { createFillingComponent } from './createFilling/createFilling.component';
import { showFillingComponent } from './showFilling/showFilling.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [

    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'createfilling', component: createFillingComponent },
    { path: 'showfilling', component: showFillingComponent },
];

export const routing = RouterModule.forRoot(appRoutes);