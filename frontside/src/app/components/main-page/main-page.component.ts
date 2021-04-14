import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    slowOnset
  ]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
