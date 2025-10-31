import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AccreditationComponent } from '../../shared/components/accreditation/accreditation.component';

@Component({
  selector: 'app-topaz-house',
  imports: [NgClass, NgFor, AccreditationComponent],
  templateUrl: './topaz-house.component.html',
  styleUrl: './topaz-house.component.scss'
})
export class TopazHouseComponent {
  activeIndex = 0;
  count = [
    {
      src: "assets/images/houses/topaz.jpg",
      name: "Topaz House"
    },
    {
      src: "assets/images/houses/topaz.jpg",
      name: "Topaz House"
    },
    {
      src: "assets/images/houses/topaz.jpg",
      name: "Topaz House"
    },
    {
      src: "assets/images/houses/topaz.jpg",
      name: "Topaz House"
    },
    {
      src: "assets/images/houses/topaz.jpg",
      name: "Topaz House"
    },
    {
      src: "assets/images/houses/topaz.jpg",
      name: "Topaz House"
    },
  ]
  isCQC = false;
  isOfsted = true;

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
