import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { restaurant } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.css'
})
export class FinalCtaComponent {
  restaurant = restaurant;
}
