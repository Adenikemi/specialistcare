import { Component } from '@angular/core';
import { AccreditationComponent } from '../../shared/components/accreditation/accreditation.component';

@Component({
  selector: 'app-supported-living',
  imports: [AccreditationComponent],
  templateUrl: './supported-living.component.html',
  styleUrl: './supported-living.component.scss'
})
export class SupportedLivingComponent {
  isCQC = true;
  isOfsted = false;
}
