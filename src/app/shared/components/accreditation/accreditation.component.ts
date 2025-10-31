import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accreditation',
  imports: [NgIf, NgClass],
  templateUrl: './accreditation.component.html',
  styleUrl: './accreditation.component.scss'
})
export class AccreditationComponent {
  @Input() isOfsted = true;
  @Input() isCQC = true;
}
