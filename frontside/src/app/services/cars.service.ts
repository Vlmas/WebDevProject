import { Injectable } from '@angular/core';
import { CARS } from '../fake-db';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars() {
    return CARS;
  }
}
