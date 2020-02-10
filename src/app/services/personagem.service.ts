import { PersonagemResponse } from './../interfaces/personagem-response';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService extends ApiService<PersonagemResponse> {

  constructor(protected http: HttpClient) {
    super(http);
  }
}
