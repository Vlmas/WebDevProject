import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchingText!: string;
  headerFlag: boolean = true;
  mobile: boolean = false;

  constructor(private searchBar: ElementRef, private router: Router) { }

  ngOnInit(): void { }
  
  showSearch(): void {
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

  search() {
    this.router.navigateByUrl('/search/' + String(this.searchingText));
  }
}