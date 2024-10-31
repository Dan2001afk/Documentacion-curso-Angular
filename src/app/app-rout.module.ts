import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';

const routes: Routes=[
  {
    path: 'help',
    component: HelpComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Usa forChild aquí
  ],exports: [RouterModule]
  
})
export class AppRoutModule { }
