import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AccreditationComponent } from '../../shared/components/accreditation/accreditation.component';

@Component({
  selector: 'app-home',
  imports: [AccreditationComponent, NgFor, NgClass ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private router = inject(Router);
  activeIndex = 0;
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
        'Here at speciality care, we show compassion and empathy to our residents to ensure they feel safe and comfortable in our care',
    },
    {
      icon: 'assets/logo/respect.png',
      heading: 'Respect',
      message:
        'Here at speciality care, we ensure to respect our residents by understanding their personal space and boundaries.',
    },
    {
      icon: 'assets/logo/equality.png',
      heading: 'Equality',
      message:
        'All our residents can express their wishes and preferences which allows them to have a positive experience at speciality care.',
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
  
  prev() {
    if (this.activeIndex > 0) this.activeIndex--;
  }
  
  next() {
    if (this.activeIndex < this.totalSlides - 1) this.activeIndex++;
  }
}
