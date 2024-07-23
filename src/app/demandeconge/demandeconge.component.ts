import { Component } from '@angular/core';

@Component({
  selector: 'app-demandeconge',
  standalone: true,
  imports: [],
  templateUrl: './demandeconge.component.html',
  styleUrl: './demandeconge.component.css'
})
export class DemandecongeComponent {

  file: File | null = null;

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]){
      this.file = input.files[0];
      console.log('Fichier sélectionné:', this.file.name);
    }
  }

  onSubmit(): void {
    if (this.file) {
      console.log('Formulaire soumis avec fichier:', this.file.name);
    }
  }
}