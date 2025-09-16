import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topaz-house',
  imports: [NgClass, NgFor],
  templateUrl: './topaz-house.component.html',
  styleUrl: './topaz-house.component.scss'
})
export class TopazHouseComponent {
  activeIndex = 0;
  count = [
    {
      src: "assets/images/topaz.JPG",
      name: "Topaz House"
    },
    {
      src: "assets/images/topaz.JPG",
      name: "Topaz House"
    },
    {
      src: "assets/images/topaz.JPG",
      name: "Topaz House"
    },
    {
      src: "assets/images/topaz.JPG",
      name: "Topaz House"
    },
    {
      src: "assets/images/topaz.JPG",
      name: "Topaz House"
    },
    {
      src: "assets/images/topaz.JPG",
      name: "Topaz House"
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
