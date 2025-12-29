import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  imports: [NgFor, NgClass],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent {
  services = [
    {
      icon: 'assets/logo/empathy.png',
      heading: 'Empathy',
      message:
        'Here at specialist care, we listen, understand, and walk alongside each person on dtheir journey.',
    },
    {
      icon: 'assets/logo/respect.png',
      heading: 'Respect',
      message:
        'Here at specialist care, we ensure to respect our residents by valuing individuality, culture, and choice.',
    },
    {
      icon: 'assets/logo/equality.png',
      heading: 'Equality',
      message:
        'All our residents can express their wishes and preferences because we create fair, inclusive spaces where everyone can thrive.',
    },
    {
      icon: 'assets/logo/care.png',
      heading: 'Care',
      message:
        'Here at Specialist Care, we provide safe, nurturing environments with wellbeing at the centre.',
    },
    {
      icon: 'assets/logo/independence.png',
      heading: 'Independence',
      message:
        'We empower people to grow in confidence and live life on their own terms.',
    },
  ];

  getColClass(index: number): string {
    const total = this.services.length;
  
    // If total is 5 and item is in the last row (index 3 & 4)
    if (total === 5 && index >= 3) {
      return 'col-md-6';
    }
  
    // Default: 3 items per row
    return 'col-md-4';
  }
  
}
