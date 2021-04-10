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
    if (this.headerFlag === false) {
      return;
    }

    this.headerFlag = false;
    let elem = this.searchBar.nativeElement.querySelector(".header-container .search-box");
    let position = -2000;
    let id = setInterval(frame, 10);

    function frame() {
      if (position >= 0) {
        clearInterval(id);
      } else {
        console.log(position);
        position += 20;
        elem.style.marginLeft = position + 'px';
      }
    }
  }

  back(): void {
    if (this.headerFlag === true) {
      return;
    }

    this.headerFlag = true;
    let elem = this.searchBar.nativeElement.querySelector(".header-container .search-box");
    let position = 0;
    let id = setInterval(frame, 10);

    function frame() {
      if (position <= -2000) {
        clearInterval(id);
      } else {
        console.log(position);
        position -= 20;
        elem.style.marginLeft = position + 'px';
      }
    }
  }
}