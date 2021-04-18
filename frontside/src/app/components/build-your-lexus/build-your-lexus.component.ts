import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';
import { Car } from 'src/app/models/car-model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-build-your-lexus',
  templateUrl: './build-your-lexus.component.html',
  styleUrls: ['./build-your-lexus.component.css'],
  animations: [
    slowOnset
  ]
})
export class BuildYourLexusComponent implements OnInit {

  flag: boolean = false;
  car!: Car;
  modelName!: string;
  body!: string;
  startingPrise!: number;
  engineId!: number;
  gearboxId!: number;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
  }

  buildCar() {
    this.car = {
      id: this.carsService.getCars().length + 1,
      modelName: this.modelName,
      body: this.body,
      assetUrls: ['../../../assets/images/default-lexus.png', '../../../assets/images/mainpagephoto.jpg'],
      startingPrice: Number(this.startingPrise),
      engine: this.carsService.getCarEngine(Number(this.engineId)),
      gearBox: this.carsService.getCarGearbox(Number(this.gearboxId)),
      dimensions: [4700, 1800, 1450]
    }

    this.carsService.addCar(this.car);
  }

  swapFlag() {
    this.flag = !this.flag;
  }
}
