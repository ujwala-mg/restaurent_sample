import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  features = [
    { title: 'Family dining', tone: 'clay' as const },
    { title: "Children's play area", tone: 'gold' as const },
    { title: 'Ample parking', tone: 'charcoal' as const },
    { title: 'Comfortable seating', tone: 'cream' as const }
  ];
}
