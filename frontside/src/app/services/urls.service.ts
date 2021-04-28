import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../models/url-model';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  BASE_URL: string = 'http://localhost:8000/api';

  constructor(private client: HttpClient) { }

  getUrls(): Observable<Url[]> {
    return this.client.get<Url[]>(`${this.BASE_URL}/urls/`);
  }
  
  getUrlsByPattern(pattern: string): Observable<Url[]> {
    return this.client.get<Url[]>(`${this.BASE_URL}/urls/${pattern}/`);
  }
}