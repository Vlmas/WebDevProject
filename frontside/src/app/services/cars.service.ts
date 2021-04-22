import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CARS, CONCEPT_CARS, ENGINES, GEARBOXES } from '../fake-db';
import { Car } from '../models/car-model';
import { ConceptCar } from '../models/concept-car-model';
import { Engine } from '../models/engine-model';
import { Gearbox } from '../models/gearbox-model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  BASE_URL: string = 'https://localhost:8000';

  constructor(private client: HttpClient) { }

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
    return ENGINES.find(p => p.id === id) as Engine;
  }

  getCarGearbox(id: number) {
    return GEARBOXES.find(p => p.id === id) as Gearbox;
  }

  getConceptCars() {
    return CONCEPT_CARS;
  }

  // getCars(id: number): Observable<Car[]> {
  //   return this.client.get<Car[]>(`${this.BASE_URL}/api/cars`);
  // }

  // getCar(modelName: string): Observable<Car> {
  //   return this.client.get<Car>(`${this.BASE_URL}/api/models/${modelName}`);
  // }

  // addCar(car: Car): Observable<Car> {
  //   return this.client.post<Car>(`${this.BASE_URL}/cars`, car);
  // }

  // getCarEngine(id: number): Observable<Engine> {
  //   return this.client.get<Engine>(`${this.BASE_URL}/engines/${id}`);
  // }

  // getCarGearbox(id: number): Observable<Gearbox> {
  //   return this.client.get<Gearbox>(`${this.BASE_URL}/gearboxes/${id}`);
  // }

  // getConceptCars(): Observable<ConceptCar[]> {
  //   return this.client.get<ConceptCar[]>(`${this.BASE_URL}/concept_cars`);
  // }
}
