import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PersonagemService } from './services/personagem.service';
import { ApiService } from './services/api.service';
import { Globals } from './globals';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonagemListComponent } from './personagens/list/personagem-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatIconModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { EspecieService } from './services/especie.service';
import { PlanetaService } from './services/planeta.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FilmesComponent } from './personagens/filmes/filmes.component';
import { NavesComponent } from './personagens/naves/naves.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonagemListComponent,
    FilmesComponent,
    NavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [Globals, ApiService, PersonagemService, EspecieService, PlanetaService],
  bootstrap: [AppComponent],
  entryComponents:[FilmesComponent, NavesComponent]
})
export class AppModule { }
