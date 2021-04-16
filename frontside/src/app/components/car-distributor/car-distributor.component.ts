import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slowOnset } from 'src/app/animations';
import { Car } from 'src/app/models/car-model';
import { CarsBodyService } from 'src/app/services/cars-body.service';

@Component({
  selector: 'app-car-distributor',
  templateUrl: './car-distributor.component.html',
  styleUrls: ['./car-distributor.component.css'],
  animations: [
    slowOnset
  ]
})
export class CarDistributorComponent implements OnInit {

  cars!: Car[];
  title!: string;

  constructor(private route: ActivatedRoute, private carsBodyService: CarsBodyService) { 
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.route.paramMap.subscribe(params => {
      let body = String(params.get('carBody'));
      this.cars = this.carsBodyService.getCarsByBody(body);
      this.title = (this.cars[0].body === 'performance') ? this.cars[0].body.toUpperCase() : this.cars[0].body?.toUpperCase() + 'S';
    })
  }
}
