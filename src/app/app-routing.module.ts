import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonagemListComponent } from './personagens/list/personagem-list.component';

const routes: Routes = [
  {
    path: '',
    component: PersonagemListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
