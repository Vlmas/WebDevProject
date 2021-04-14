import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css'],
  animations: [
    slowOnset
  ]
})
export class DealersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
