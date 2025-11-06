import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { AccreditationComponent } from '../../shared/components/accreditation/accreditation.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  totalGroups = 0;
  isSmallScreen = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

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

  get totalSlides() {
    return Math.ceil(this.count.length / 3);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
      this.totalGroups = this.getGroups().length;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
      this.totalGroups = this.getGroups().length;
      this.activeIndex = 0;
    }
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 576;
  }

  getGroups() {
    const groupSize = this.isSmallScreen ? 1 : 3;
    const groups = [];
    for (let i = 0; i < this.count.length; i += groupSize) {
      groups.push(this.count.slice(i, i + groupSize));
    }
    return groups;
  }

  next() {
    if (this.activeIndex < this.totalGroups - 1) {
      this.activeIndex++;
    }
  }

  prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
}
