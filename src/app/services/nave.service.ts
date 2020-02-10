import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Nave } from '../interfaces/nave';

@Injectable({
  providedIn: 'root'
})
export class NaveService extends ApiService<Nave> {

  constructor(protected http: HttpClient) {
    super(http);
  }
}
