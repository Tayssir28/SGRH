import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';


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
      MatButtonModule,
    ]
  })
export class AppComponent {
  title = 'SGRH';
}

