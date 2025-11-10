import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import { Component, HostListener, Inject, inject, PLATFORM_ID } from '@angular/core';
import { AccreditationComponent } from '../../shared/components/accreditation/accreditation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AccreditationComponent, NgFor, NgClass ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private router = inject(Router);
  count = [
    {
      src: "assets/images/houses/little_acorn_home.jpg",
      name: "Little Acorns"
    },
    {
      src: "assets/images/coming_soon2.png",
      name: "High Road House"
    },
    {
      src: "assets/images/coming_soon2.png",
      name: "Earles Garden House"
    },
    {
      src: "assets/images/coming_soon2.png",
      name: "Homesdale House"
    },
    {
      src: "assets/images/houses/topaz.jpg",
      name: "Topaz House"
    },
    {
      src: "assets/images/coming_soon2.png",
      name: "Fernwood House"
    },
  ]
  isCQC = true;
  isOfsted = true;

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToServices() {
    this.router.navigate(['/services']);
  }

  services = [
    {
      icon: 'assets/logo/empathy.png',
      heading: 'Empathy',
      message:
        'Here at specialist care, we show compassion and empathy to our residents to ensure they feel safe and comfortable in our care',
    },
    {
      icon: 'assets/logo/respect.png',
      heading: 'Respect',
      message:
        'Here at specialist care, we ensure to respect our residents by understanding their personal space and boundaries.',
    },
    {
      icon: 'assets/logo/equality.png',
      heading: 'Equality',
      message:
        'All our residents can express their wishes and preferences which allows them to have a positive experience at specialist care.',
    },
    {
      icon: 'assets/logo/care.png',
      heading: 'Care',
      message:
        'The staff are patient with the residents and they understand the impact poor mental Health.',
    },
    {
      icon: 'assets/logo/independence.png',
      heading: 'Independence',
      message:
        'We organise activities that are geared towards our residents learning skills that promote independent living.',
    },
  ];

  get totalSlides() {
    return Math.ceil(this.count.length / 3);
  }

  activeIndex = 0;
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
