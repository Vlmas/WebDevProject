import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car-model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car!: Car;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this.car = this.carsService.getCar('IS');
  }
}
