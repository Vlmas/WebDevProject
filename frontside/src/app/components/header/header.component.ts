import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerFlag: boolean = true;
  mobile: boolean = false;

  constructor(private searchBar: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { }
  
  search(): void {
    let elem = this.searchBar.nativeElement.querySelector(".header-container .search-box");
    elem.classList.toggle("search-active");
  }

  slide(): void {
    let elem = this.searchBar.nativeElement.querySelector(".header-container .mobile");
    elem.classList.toggle("show");
  }

  refresh() {
    window.location.reload();
  }
}