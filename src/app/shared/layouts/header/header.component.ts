import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
declare const bootstrap: any;

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);

  openedDropdowns = new Set<string>();

  navigate(event: Event, route: string) {
    const dropdownToggle = event.currentTarget as HTMLElement;
    const dropdownMenu = dropdownToggle.nextElementSibling;

    if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
      const isOpen = dropdownMenu.classList.contains('show');

      if (!this.openedDropdowns.has(route)) {
        event.preventDefault();
        const bsDropdown = new bootstrap.Dropdown(dropdownToggle);
        bsDropdown.show();
        this.openedDropdowns.add(route);
        return;
      }
    }
    this.router.navigate([route]);
    // window.location.href = route;
  }



}
