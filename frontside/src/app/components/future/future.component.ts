import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css'],
  animations: [
    slowOnset
  ]
})
export class FutureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
