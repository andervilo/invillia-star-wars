import { Especie } from './../interfaces/especie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable()
export class EspecieService extends ApiService<Especie> {

  constructor(protected http: HttpClient) {
    super(http);
  }
}
