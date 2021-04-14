import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';

@Component({
  selector: 'app-l-certified',
  templateUrl: './l-certified.component.html',
  styleUrls: ['./l-certified.component.css'],
  animations: [
    slowOnset
  ]
})
export class LCertifiedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
