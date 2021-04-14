import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car-model';
import { CarsBodyService } from 'src/app/services/cars-body.service';

@Component({
  selector: 'app-car-distributor',
  templateUrl: './car-distributor.component.html',
  styleUrls: ['./car-distributor.component.css']
})
export class CarDistributorComponent implements OnInit {

  cars!: Car[];
  body!: string;

  constructor(private route: ActivatedRoute, private carsBodyService: CarsBodyService) { 
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    const routeParams = this.route.snapshot.paramMap;
    this.body = String(routeParams.get('carBody'));
    this.cars = this.carsBodyService.getCarsByBody(this.body);
  }
}
