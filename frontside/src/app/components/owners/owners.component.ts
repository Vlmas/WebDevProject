import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css'],
  animations: [
    slowOnset
  ]
})
export class OwnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
