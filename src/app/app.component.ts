import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AjoutempComponent } from "./ajoutemp/ajoutemp.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  template: `
    <main>
      <header class="brand-name">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
   styleUrls: ['./app.component.css'],

    imports: [CommonModule,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FormsModule,
    MatCommonModule,
    MatIcon,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule, DashboardComponent, FooterComponent, AjoutempComponent],
    
  })
export class AppComponent {
  title = 'SGRH';
  sidebarVisible:boolean =true;

  
}

