import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { ExpProfissional } from './exp-profissional/exp-profissional';
import { ExpAcademica } from './exp-academica/exp-academica';
import { Certificados } from './certificados/certificados';
import { Hobbies } from './hobbies/hobbies';
import { NgModule } from '@angular/core';

export const routes: Routes = [ 
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: Inicio },
  { path: 'ExpProfissional', component: ExpProfissional },
  { path: 'ExpAcademica', component: ExpAcademica },
  { path: 'Certificados', component: Certificados },
  { path: 'Hobbies', component: Hobbies },
    { path: '**', redirectTo: 'Inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
