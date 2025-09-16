import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);

  navigate(event: Event, url: string) {
    event.preventDefault(); // stop Bootstrap from blocking
    this.router.navigateByUrl(url); // Angular Router navigation
  }

  // handleDropdown() {
  //   const dropdownLinks = document.querySelectorAll('.dropdown-toggle');
  //   dropdownLinks.forEach(link => {
  //     link.addEventListener('click',  (e) => {
  //       if (this.get('href') !== '#') {
  //         window.location = this.getAttribute('href');
  //       }
  //     });
  //   });
  // }
  
}
