import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  openAlert:boolean =false

  mostrar_al_dar_click (name:string){
    console.log(name)
    
    this.openAlert=true
  }

}
