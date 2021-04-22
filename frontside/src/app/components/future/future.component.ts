import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';
import { ConceptCar } from 'src/app/models/concept-car-model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css'],
  animations: [
    slowOnset
  ]
})
export class FutureComponent implements OnInit {

  conceptCars!: ConceptCar[];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.getConceptCars();
  }

  getConceptCars() {
    this.conceptCars = this.carsService.getConceptCars();
  }
}
