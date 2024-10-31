import { Component } from '@angular/core';
import { Persona } from '../Persona';
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {

personas:Persona [] = [
  {nombre: "Daniel", edad: 23, estudio: "Analista y Desarrollador de Software"},
  {nombre: "justin", edad: 20, estudio: "Analista y Desarrollador de Software"},
  {nombre: "Nicolas", edad: 22, estudio: "Analista y Desarrollador de Software"},
  {nombre: "Diego", edad: 26, estudio: "Analista y Desarrollador de Software"}
  
]


}
