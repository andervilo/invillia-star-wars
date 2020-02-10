import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(protected http: HttpClient) { }

  getResouce(url: string) {
    return this.http.get<T>(url);
  }
}
