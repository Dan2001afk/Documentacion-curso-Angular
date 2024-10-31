import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-plan',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-plan.component.html',
  styleUrl: './form-plan.component.css'
})
export class FormPlanComponent {

  persona = {
    Nombre: '' ,
    Edad: '',
    Estudio: ''
  }

  EnvirDatos(){
    console.log(this.persona)
  }



}
