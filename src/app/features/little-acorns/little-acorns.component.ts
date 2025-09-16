import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-little-acorns',
  imports: [NgFor, NgClass],
  templateUrl: './little-acorns.component.html',
  styleUrl: './little-acorns.component.scss'
})
export class LittleAcornsComponent {
  activeIndex = 0;
  count = [
    {
      src: "assets/images/little_acorn_home.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/acorn.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/acorn2.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/acorn3.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/topaz.JPG",
      name: "Little Acorns"
    },
    {
      src: "assets/images/acorn4.jpg",
      name: "Little Acorns"
    },
  ]

  get totalSlides() {
    return Math.ceil(this.count.length / 3);
  }
  
  prev() {
    if (this.activeIndex > 0) this.activeIndex--;
  }
  
  next() {
    if (this.activeIndex < this.totalSlides - 1) this.activeIndex++;
  }
}
