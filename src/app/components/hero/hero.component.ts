import { Component } from '@angular/core';
import { restaurant } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  restaurant = restaurant;
}
