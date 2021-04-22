import { Injectable } from '@angular/core';
import { URLS } from '../fake-db';
import { Url } from '../models/url-model';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor() { }

  getUrls() {
    return URLS;
  }

  getUrlsByPattern(pattern: string) {
    return URLS.filter(p => p.name.toLowerCase() === pattern.toLowerCase()) as Url[];
  }

  // getUrls(): Observable<Url> {
  //   return this.client.get<Url>(`${this.BASE_URL}/urls`);
  // }
  
  // getUrlsByPattern(pattern: string): Observable<Url> {
  //   return this.client.get<Url>(`${this.BASE_URL}/urls/${pattern}`);
  // }
}