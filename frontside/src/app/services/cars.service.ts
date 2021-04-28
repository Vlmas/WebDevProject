import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car-model';
import { ConceptCar } from '../models/concept-car-model';
import { Engine } from '../models/engine-model';
import { Gearbox } from '../models/gearbox-model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  BASE_URL: string = 'http://localhost:8000/api';

  constructor(private client: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.client.get<Car[]>(`${this.BASE_URL}/models/`);
  }

  getCar(modelName: string): Observable<Car> {
    return this.client.get<Car>(`${this.BASE_URL}/models/${modelName}/`);
  }

  addCar(car: Car): Observable<Car> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    return this.client.post<Car>(`${this.BASE_URL}/models/`, car, httpOptions);
  }

  getCarEngine(id: number): Observable<Engine> {
    return this.client.get<Engine>(`${this.BASE_URL}/engines/${id}/`);
  }

  getCarGearbox(id: number): Observable<Gearbox> {
    return this.client.get<Gearbox>(`${this.BASE_URL}/gearboxes/${id}/`);
  }

  getConceptCars(): Observable<ConceptCar[]> {
    return this.client.get<ConceptCar[]>(`${this.BASE_URL}/future/`);
  }
}
