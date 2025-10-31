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
    event.preventDefault();
    this.router.navigateByUrl(url);
  }
}
