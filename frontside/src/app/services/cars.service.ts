import { Injectable } from '@angular/core';
import { CARS, ENGINES, GEARBOXES } from '../fake-db';
import { Car } from '../models/car-model';
import { Engine } from '../models/engine-model';
import { Gearbox } from '../models/gearbox-model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars() {
    return CARS;
  }

  getCar(modelName: string) {
    return CARS[CARS.findIndex(p => p.modelName === modelName)] as Car;
  }

  addCar(car: Car) {
    CARS.push(car);
  }

  getCarEngine(id: number) {
    return ENGINES.filter(p => p.id === id) as Engine[];
  }

  getCarGearbox(id: number) {
    return GEARBOXES.filter(p => p.id === id) as Gearbox[];
  }
}
