import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { slowOnset } from 'src/app/animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [
    slowOnset
  ]
})
export class NotFoundComponent implements OnInit, AfterViewInit {
  image: any;
  backGroundImage: any;
  mouseOn: boolean = false;
  x!: number;
  x2!: number;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: { clientX: number; clientY: number; }) {
    console.log(this.x);
    if (this.mouseOn === true) {
      this.image.style.marginLeft = -300 + (e.clientX - this.x) / 10 + "px";
      this.image.style.marginTop = e.clientY / 10 + "px";
      this.backGroundImage.style.marginLeft = 300 + (-e.clientX + this.x2) / 10 + "px";
      this.backGroundImage.style.marginTop = -e.clientY / 10 + "px";
    }
  }

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.image = this.elem.nativeElement.querySelector('.image');
    this.backGroundImage = this.elem.nativeElement.querySelector('.background-image');
    this.x = this.image.offsetLeft;
    this.x2 = this.backGroundImage.offsetLeft;
  }

  mouseenter(): void {
    this.mouseOn = true;
  }

  mouseleave(): void {
    this.mouseOn = false;
  }
}
