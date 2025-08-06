import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LocationComponent } from './location/location';
import { MaintenanceComponent } from './maintenance/maintenance';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'location', component: LocationComponent },
    { path: 'maintenance', component: MaintenanceComponent }
];
