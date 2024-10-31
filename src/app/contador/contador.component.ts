import { Component } from '@angular/core';
import { Persona } from '../Persona';
@Component({
  selector: 'app-contador',
  standalone: true,//verificar que este e true para evitar errores al intentar agg el componente 
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //ejemplo de componente con objetos, creamos interfaz llamada Persona.ts 
  //para asignar tipos de Dato a las variables
  persona:Persona ={
    nombre:"Danie2 Gonzalez",
    edad: 23,
    estudio:"Tecnologo en Analisis y Desarrollo de Software"
  }

  numero: number =1

  Decrementar () {
    this.numero --;
  }

  Incrementar() {
    this.numero +=1;
  }
}
