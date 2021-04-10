import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car-model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-build-your-lexus',
  templateUrl: './build-your-lexus.component.html',
  styleUrls: ['./build-your-lexus.component.css']
})
export class BuildYourLexusComponent implements OnInit {

  cars!: Car[];
  constructor(private carsService: CarsService) { 
    this.getCars();
  }

  ngOnInit(): void {
  }

  getCars(): void {
    this.cars = this.carsService.getCars();
  }
}
