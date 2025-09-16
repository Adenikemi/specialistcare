import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  services = [
    {
      icon: 'assets/logo/empathy.png',
      heading: 'Empathy',
      message:
        'Listening, understanding, and walking alongside each person on their journey.',
    },
    {
      icon: 'assets/logo/respect.png',
      heading: 'Respect',
      message:
        'Valuing individuality, culture, and choice.',
    },
    {
      icon: 'assets/logo/equality.png',
      heading: 'Equality',
      message:
        'Creating fair, inclusive spaces where everyone can thrive.',
    },
    {
      icon: 'assets/logo/care.png',
      heading: 'Care',
      message:
        'Providing safe, nurturing environments with wellbeing at the centre.',
    },
    {
      icon: 'assets/logo/independence.png',
      heading: 'Independence',
      message:
        'Empowering people to grow in confidence and live life on their own terms.',
    },
  ];
}
