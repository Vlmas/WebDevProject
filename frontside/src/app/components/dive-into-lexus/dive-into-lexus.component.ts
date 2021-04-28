import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';
import { Car } from 'src/app/models/car-model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-dive-into-lexus',
  templateUrl: './dive-into-lexus.component.html',
  styleUrls: ['./dive-into-lexus.component.css'],
  animations: [
    slowOnset
  ]
})
export class DiveIntoLexusComponent implements OnInit {

  cars!: Car[];
  
  constructor(private carsService: CarsService) { 
    this.getCars();
  }

  ngOnInit(): void {
  }

  getCars(): void {
    this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
    })
  }
}
