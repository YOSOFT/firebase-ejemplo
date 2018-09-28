import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'app';
  imagenUrl = 'assets/imagenes/logo.png';
  numeros = [
    {
      titulo: 'Angular',
      ciudad: 'Bogota'
    },
    {
      titulo: 'React',
      ciudad: 'Bogota'
    },
    {
      titulo: 'Vue',
      ciudad: 'Bogota'
    },
    {
      titulo: 'Polymer',
      ciudad: 'Bogota'
    }
  ];

  manejarEvento() {
    alert('Se hizo click');
  }
}
