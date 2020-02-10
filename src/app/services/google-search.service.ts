import { HttpClient } from '@angular/common/http';
import { GoogleSearch } from './../interfaces/google-search';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchService extends ApiService<GoogleSearch> {
  constructor(protected http: HttpClient) {
    super(http);
  }
}
