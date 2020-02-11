import { FilmesComponent } from './../filmes/filmes.component';
import { GoogleSearchService } from './../../services/google-search.service';
import { PlanetaService } from './../../services/planeta.service';
import { PersonagemResponse } from './../../interfaces/personagem-response';

import { Personagem } from '../../interfaces/personagem';
import { PersonagemService } from '../../services/personagem.service';
import { Component, OnInit , ViewChild } from '@angular/core';
import { Globals } from 'src/app/globals';
import { EspecieService } from 'src/app/services/especie.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {Overlay} from '@angular/cdk/overlay';
import { NavesComponent } from '../naves/naves.component';

@Component({
  selector: 'app-list',
  templateUrl: './personagem-list.component.html',
  styleUrls: ['./personagem-list.component.css']
})
export class PersonagemListComponent implements OnInit {

  personagens: Personagem[];
  controller: PersonagemResponse;
  numberPages: number;
  pages: number[];
  paginaAtual: string;
  showPagination: boolean;
  value: string;
  

  constructor(
    private personagemService: PersonagemService,
    private especieService: EspecieService,
    private planetaService: PlanetaService,
    private googleSearchService: GoogleSearchService,
    private dialog: MatDialog,
    private overlay: Overlay,
    public globals: Globals  ) { }

  ngOnInit() {
    this.value = '';
    this.getPersonagens(this.globals.apiSWpeople + '/?page=1');
  }

  getPersonagens(url: string) {
    this.showPagination = false;
    this.personagemService.getResouce(url)
    .subscribe(data => {
      this.personagens = data.results;
      this.controller = data;

      if (this.personagens !== undefined) {
        this.personagens.forEach((item, index) => {

            if (item.species.length !== 0) {
              this.especieService.getResouce(item.species[0])
              .subscribe(res => {
                try {
                  this.personagens[index].especie = res.name;
                } catch (error) {
                }
              });
            } else {
              this.personagens[index].especie = '';
            }
        });

        this.personagens.forEach((item, index) => {
          this.planetaService.getResouce(item.homeworld)
          .subscribe(res => {
            try {
              this.personagens[index].planeta = res.name;
            } catch (error) {
            }
          });
        });

        this.personagens.forEach((item, index) => {
          const URL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDuZjydooCR_5KgFcpioaSOt7A1GeD7EMg&cx=008713618870709825237:sx8awo7vatj&q=' + item.name + '&searchType=image';

          this.googleSearchService.getResouce(URL)
          .subscribe(res => {
            try {
              this.personagens[index].foto = res.items[0].link;
            } catch (error) {
            }
          });
        });
      }

      this.numberPages = Math.ceil(this.controller.count / 10);
      this.pages = Array.apply(null, {length: this.numberPages}).map(Number.call, Number);
      this.showPagination = this.controller !== undefined ? true : false;
    });

    this.paginaAtual = url.split('page=')[1];
  }

  applyFilter(filtervalue: string) {
    this.getPersonagens(this.globals.apiSWpeople + '/?search=' + filtervalue);
  }

  clearFilter() {
    this.value = '';
    this.getPersonagens(this.globals.apiSWpeople);
  }

  exibirFilmes(personagem: Personagem) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = '70%';
    dialogConfig.data = {personagem};
    this.dialog.open(FilmesComponent, dialogConfig);
  }

  exibirNaves(personagem: Personagem) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = '70%';
    dialogConfig.data = {personagem};
    this.dialog.open(NavesComponent, dialogConfig);
  }

}
