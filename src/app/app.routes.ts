import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes,} from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { SwitchComponent } from './switch/switch.component';
import { BotonesComponent } from './botones/botones.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { FormPlanComponent } from './form-plan/form-plan.component';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { BioUserComponent } from './bio-user/bio-user.component';





export const routes: Routes =[
    {path: '',   redirectTo: '/Inicio', pathMatch: 'full' },
    {path:'Contacto', component: ContactoComponent,
      children: [
        {
          path: '',
          component: InfoUserComponent
        },
        {
          path: 'biografia',
          component: BioUserComponent
        },
        {path: '**',
          component: PageNotFoundComponentComponent},
      ]
      },
    {path: 'Inicio', component:InicioComponent},
    {path: 'contador',component: ContadorComponent},
    {path: 'switch',component: SwitchComponent},
    {path: 'botones',component: BotonesComponent},
    {path: 'add-messages',component: AddMessagesComponent},
    {path: 'form-plan',component: FormPlanComponent},
    {path: 'form-reactivo',component: FormReactivoComponent},
    {path: 'formulario',component: FormularioComponent},
    {path: 'list-messages',component: ListMessagesComponent},
    {path: '**', component: PageNotFoundComponentComponent},

  ];


