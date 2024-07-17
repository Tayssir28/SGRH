import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AjoutempComponent } from './ajoutemp/ajoutemp.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  // { path: '', redirectTo: '/ajoutemp', pathMatch: 'full', component: AjoutempComponent },
  { path: 'ajoutemp', component: AjoutempComponent }
];

 
@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      NavbarComponent,
      SidebarComponent,
      DashboardComponent,
     ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatCommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgIconComponent,
    SidebarModule,
    ButtonModule,
    Component,
    RouterModule, 
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [provideIcons({ heroUsers })],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
