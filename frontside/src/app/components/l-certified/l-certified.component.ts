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

  share(){
    window.open(`https://t.me/share/url?url=www.lexus.com&text=Welcome+to+one+of+the+Biggest+auto+company`);
  }
}
