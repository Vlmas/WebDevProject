import { Component, OnInit } from '@angular/core';
import { slowOnset } from 'src/app/animations';

@Component({
  selector: 'app-dive-into-lexus',
  templateUrl: './dive-into-lexus.component.html',
  styleUrls: ['./dive-into-lexus.component.css'],
  animations: [
    slowOnset
  ]
})
export class DiveIntoLexusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
