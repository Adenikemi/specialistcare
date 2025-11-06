import { Component } from '@angular/core';
import { ComingSoonComponent } from '../../shared/components/coming-soon/coming-soon.component';

@Component({
  selector: 'app-join-team',
  imports: [ComingSoonComponent],
  templateUrl: './join-team.component.html',
  styleUrl: './join-team.component.scss'
})
export class JoinTeamComponent {
  joinTeam = "We're currently not recruiting"
}
