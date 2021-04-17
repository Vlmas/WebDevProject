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
}