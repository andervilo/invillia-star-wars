import { GoogleSearchService } from './../../services/google-search.service';
import { Filmes } from './../../interfaces/filmes';
import { Personagem } from './../../interfaces/personagem';
import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Filmes[] = [];
  personagem: Personagem;

  constructor(
    public dialogbox: MatDialogRef<FilmesComponent>,
    private filmesService: FilmeService,
    private googleSearchService: GoogleSearchService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.personagem = this.data.personagem;
    this.getFilmes();
  }

  getFilmes() {
      this.personagem.films.forEach(item => {        
        this.filmesService.getResouce(item).subscribe(res => {
          try {
            this.filmes.push(res);
          } catch (error) {
          }
        });
      });

      this.filmes.forEach((item, index) => {
        const URL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDuZjydooCR_5KgFcpioaSOt7A1GeD7EMg&cx=008713618870709825237:sx8awo7vatj&q=' + item.title.concat(' poster') + '&searchType=image';

        this.googleSearchService.getResouce(URL)
        .subscribe(res => {
          try {
            this.filmes[index].poster = res.items[0].link;
          } catch (error) {
          }
        });
      });
  }
}
