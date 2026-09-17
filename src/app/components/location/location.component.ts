import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { restaurant } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  restaurant = restaurant;
}
