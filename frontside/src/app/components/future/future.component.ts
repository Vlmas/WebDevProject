import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.getConceptCars();
  }

  getConceptCars() {
    this.carsService.getConceptCars().subscribe(conceptCars => {
      this.conceptCars = conceptCars;
    });
  }

  isLogged() {
    const token = localStorage.getItem('token');
    if(token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
