import { HttpClient } from '@angular/common/http';
import { Planeta } from './../interfaces/planeta';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService extends ApiService<Planeta> {

  constructor(protected http: HttpClient) {
    super(http);
  }
}
