import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-reactivo',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,NgIf,CommonModule],
  templateUrl: './form-reactivo.component.html',
  styleUrl: './form-reactivo.component.css'
})
export class FormReactivoComponent {

  get name(){
    return this.formReactivo.get('name') as FormControl;
  }

  get email(){
    return this.formReactivo.get('email') as FormControl
  }

  formReactivo = new FormGroup({
    'name': new FormControl('',Validators.required),
    'email': new FormControl('',[Validators.required, Validators.email]),
  })

  // name = new FormControl('',Validators.required);
  // email = new FormControl('',[Validators.required, Validators.email]);

  EnviarDatos(){
    console.log(this.formReactivo.value)
  }

}
