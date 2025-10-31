import { Component } from '@angular/core';
import { AccreditationComponent } from '../../shared/components/accreditation/accreditation.component';

@Component({
  selector: 'app-childrens-residential',
  imports: [AccreditationComponent],
  templateUrl: './childrens-residential.component.html',
  styleUrl: './childrens-residential.component.scss'
})
export class ChildrensResidentialComponent {
  isCQC = false;
  isOfsted = true;
}
