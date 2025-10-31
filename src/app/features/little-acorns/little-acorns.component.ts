import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AccreditationComponent } from '../../shared/components/accreditation/accreditation.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-little-acorns',
  imports: [NgFor, NgClass, AccreditationComponent],
  templateUrl: './little-acorns.component.html',
  styleUrl: './little-acorns.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [animate('500ms ease-in')]),
      transition('visible => hidden', [animate('500ms ease-out')]),
    ]),
  ],
})
export class LittleAcornsComponent {
  activeIndex = 0;
  count = [
    {
      src: "assets/images/houses/little_acorn_home.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/houses/acorn.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/houses/acorn2.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/houses/acorn3.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/houses/topaz.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/houses/acorn4.jpg",
      name: "Little Acorns"
    },
  ]
  isCQC = false;
  isOfsted = true;
  email = '';
  submitted = false;

  handleSubmit() {
    this.submitted = true;
    setTimeout(() => (this.submitted = false), 3000);
  }

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
