import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AjoutempComponent } from '../../ajoutemp/ajoutemp.component';
import { AppComponent } from '../../app.component';
import {
  Routes,
  RouterModule,
  RouterOutlet,
  RouterLink,
} from '@angular/router';

declare const $: any; // If you need jQuery, keep this line

// const routes: Routes = [
//   { path: 'dashboard',  component: DashboardComponent },
//   { path: 'ajoutemp', component: AjoutempComponent }, // Define your route
//   // Add more routes as needed
// ];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonModule, RouterOutlet, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // imports: [
  //   { path: 'ajoutemp', component: AjoutempComponent },
  //   { path: 'dashborad', component: AjoutempComponent }
  // ]
})
export class SidebarComponent implements OnInit {
  constructor() {
    this.menuItems = [];
  }
  menuItems: any[];

  ngOnInit() {
    // this.menuItems = routes.filter(menuItem => menuItem);
  }
  sidebarVisible: boolean = true;
}
