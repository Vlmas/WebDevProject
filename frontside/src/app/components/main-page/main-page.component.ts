import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('myTrigger1', [
      transition(':enter', [
        animate('200ms', style({transform: 'translateX(100%)'}))
      ]),
      transition(':leave', [
        animate('200ms', style({transform: 'translateX(0%)'}))
      ])
    ]),
    trigger('myTrigger2', [
      transition(':enter', [
        animate('200ms', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms', style({transform: 'translateX(100%)'}))
      ])   
    ])
  ]
})
export class MainPageComponent implements OnInit {

  switch: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
