import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('tr', [
      transition(':enter', [
        style({opacity: 0}),
        animate('800ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('800ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
