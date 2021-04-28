import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slowOnset } from 'src/app/animations';
import { Car } from 'src/app/models/car-model';
import { Engine } from 'src/app/models/engine-model';
import { Gearbox } from 'src/app/models/gearbox-model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  animations: [
    slowOnset
  ]
})
export class CarComponent implements OnInit {

  car!: Car;
  flag: boolean = false;
  dimensions!: string[];
  engine!: Engine;
  gearBox!: Gearbox;

  constructor(private route: ActivatedRoute, private carsService: CarsService, private element: ElementRef) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this.route.paramMap.subscribe(params => {
      let modelName = String(params.get('carId'));
      this.carsService.getCar(modelName).subscribe(car => {
        this.car = car;
        this.gearBox = this.car.gearBox as Gearbox;
        this.engine = this.car.engine as Engine;
        this.dimensions = this.car.dimensions.split(',');
      })
    })
  }

  swapFlag() {
    this.flag = !this.flag;
  }
}