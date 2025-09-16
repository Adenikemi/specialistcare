import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  imports: [NgFor],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent {
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
}
