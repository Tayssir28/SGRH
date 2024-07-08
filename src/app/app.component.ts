import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

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
      FormsModule]
  })
export class AppComponent {
  title = 'SGRH';
}

