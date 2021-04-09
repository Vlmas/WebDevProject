import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerFlag: boolean = true;

  constructor(private searchBar: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { }
  
  search(): void {
    this.headerFlag = !this.headerFlag;
    // console.log('search function called')
    // let elem = this.searchBar.nativeElement.querySelector(".search-box");
    // let width = -1500;
    // let id = setInterval(frame, 10);

    // function frame() {
    //   if (width >= 0) {
    //     clearInterval(id);
    //   } else {
    //     width += 20;
    //     elem.style.marginLeft = width + 'px';
    //   }
    //   console.log("OK");
    // }
  }

  back(): void {
    this.headerFlag = !this.headerFlag;
    // let elem = this.searchBar.nativeElement.querySelector(".search-box");
    // let width = 0;
    // let id = setInterval(frame, 10);

    // function frame() {
    //   if (width <= -1500) {
    //     clearInterval(id);
    //   } else {
    //     width -= 20;
    //     elem.style.marginLeft = width + 'px';
    //   }
    //   console.log("OK");
    // }
  }
}