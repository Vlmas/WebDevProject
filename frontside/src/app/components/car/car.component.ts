import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car-model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car!: Car;

  constructor(private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this.route.paramMap.subscribe(params => {
      let modelName = String(params.get('carId'));
      this.car = this.carsService.getCar(modelName);
    })
  }
}
