import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car-model';

@Injectable({
  providedIn: 'root'
})
export class CarsBodyService {

  BASE_URL: string = 'http://localhost:8000/api';

  constructor(private client: HttpClient) { }

  getCarsByBody(body: string): Observable<Car[]> {
    return this.client.get<Car[]>(`${this.BASE_URL}/models/bodies/${body}`);
  }
}