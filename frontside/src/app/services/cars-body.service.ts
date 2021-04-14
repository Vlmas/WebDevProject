import { Injectable } from '@angular/core';
import { CARS } from '../fake-db';
import { Car } from '../models/car-model';

@Injectable({
  providedIn: 'root'
})
export class CarsBodyService {

  constructor() { }

  getCarsByBody(body: string) {
    return CARS.filter(p => p.body === body) as Car[];
  }
}
