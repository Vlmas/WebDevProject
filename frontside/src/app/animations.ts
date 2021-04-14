import { animate, style, transition, trigger } from '@angular/animations';

export const slowOnset = trigger('tr', [
    transition(':enter', [
      style({opacity: 0}),
      animate('800ms', style({opacity: 1}))
    ]),
    transition(':leave', [
      animate('800ms', style({opacity: 0}))
    ])
])