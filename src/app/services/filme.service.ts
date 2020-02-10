import { HttpClient } from '@angular/common/http';
import { Filmes } from './../interfaces/filmes';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FilmeService extends ApiService<Filmes> {

  constructor(protected http: HttpClient) {
    super(http);
  }
}
