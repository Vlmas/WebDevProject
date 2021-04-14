import { Injectable } from '@angular/core';
import { CARS } from '../fake-db';
import { Car } from '../models/car-model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars() {
    return CARS;
  }

  getCar(modelName: string) {
    let idx = CARS.findIndex(p => p.modelName === modelName);
    console.log(CARS[idx]);
    return CARS[idx];
  }
}
