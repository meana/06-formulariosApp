import { Component } from '@angular/core';


interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Ramón',
    favoritos: [
      {id: 1, nombre: 'WRC10'},
      {id: 2, nombre: 'Dirt Rally 2.0'}
    ]
  }

  guardar() {
    console.log('Formulario Posteado')
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregar(){
    if(this.nuevoJuego !== '') {
      this.persona.favoritos.push({
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevoJuego
      });
    }

    this.nuevoJuego = '';
  }
}
