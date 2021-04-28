import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
  }

  buildCar() {  
    this.car = {
      modelName: this.modelName,
      body: this.body,
      photoForList: '../../../assets/images/default-lexus.png',
      photoForShow: '../../../assets/images/mainpagephoto.jpg',
      startingPrice: Number(this.startingPrise),
      engine: Number(this.engineId),
      gearBox: Number(this.gearboxId),
      dimensions: '4700,1800,1450'
    };

    this.carsService.addCar(this.car as Car).subscribe(params => {
      console.log('OK');
    });

    this.router.navigate([''])
  }

  swapFlag() {
    const token = localStorage.getItem('token');
    if(token) {
      this.flag = !this.flag;
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}