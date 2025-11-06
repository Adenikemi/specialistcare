import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
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
  
  totalGroups = 0;
  isSmallScreen = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
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
