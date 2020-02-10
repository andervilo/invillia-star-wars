import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NaveService } from 'src/app/services/nave.service';
import { GoogleSearchService } from 'src/app/services/google-search.service';
import { Nave } from 'src/app/interfaces/nave';
import { Personagem } from 'src/app/interfaces/personagem';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {
  naves: Nave[] = [];
  personagem: Personagem;

  constructor(
    public dialogbox: MatDialogRef<NavesComponent>,
    private naveService: NaveService,
    private googleSearchService: GoogleSearchService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.personagem = this.data.personagem;
    this.getNaves();
  }

  getNaves() {
    this.personagem.starships.forEach(item => {
      this.naveService.getResouce(item).subscribe(res => {
        try {
          this.naves.push(res);

          this.naves.forEach((nave, index) => {
            const URL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDuZjydooCR_5KgFcpioaSOt7A1GeD7EMg&cx=008713618870709825237:sx8awo7vatj&q=' + nave.model.concat(' star wars') + '&searchType=image';
            this.googleSearchService.getResouce(URL)
            .subscribe(resp => {
              try {
                this.naves[index].imagem = resp.items[0].link;
              } catch (error) {
              }
            });
          });
        } catch (error) {
        }
      });
    });

    
}

}
