import { Routes } from '@angular/router';
import { AjoutempComponent } from './ajoutemp/ajoutemp.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, title: 'dash' },
    { path: 'home', component: HomeComponent, title: 'home' },
    { path: 'ajoutemp', component: AjoutempComponent, title: 'ajout tmp' },
];
