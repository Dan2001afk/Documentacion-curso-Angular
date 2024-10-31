import { Component,} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { FormPlanComponent } from './form-plan/form-plan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { ListMessagesComponent } from "./list-messages/list-messages.component";
import {AddMessagesComponent} from "./add-messages/add-messages.component"
import { CommonModule } from '@angular/common';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { BioUserComponent } from './bio-user/bio-user.component';
import { AppRoutModule } from './app-rout.module';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent,
    BotonesComponent, FormularioComponent,
    BuclesComponent, SwitchComponent,
    FormPlanComponent, ReactiveFormsModule,
    FormReactivoComponent,ListMessagesComponent,
    AddMessagesComponent,CommonModule
    ,RouterLink,RouterLinkActive
    ,PageNotFoundComponentComponent
    ,InicioComponent,ContactoComponent,
    InfoUserComponent,BioUserComponent,AppRoutModule
  ],  //Definicion de los componentes separados por comas 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso_angular';
}
