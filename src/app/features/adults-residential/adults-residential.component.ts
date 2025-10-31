import { Component } from '@angular/core';
import { AccreditationComponent } from '../../shared/components/accreditation/accreditation.component';

@Component({
  selector: 'app-adults-residential',
  imports: [AccreditationComponent],
  templateUrl: './adults-residential.component.html',
  styleUrl: './adults-residential.component.scss'
})
export class AdultsResidentialComponent {
  isCQC = false;
  isOfsted = true;
}
