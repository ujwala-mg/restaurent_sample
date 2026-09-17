import { Component } from '@angular/core';
import { restaurant } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-mobile-bottom-bar',
  standalone: true,
  templateUrl: './mobile-bottom-bar.component.html',
  styleUrl: './mobile-bottom-bar.component.css'
})
export class MobileBottomBarComponent {
  restaurant = restaurant;
}
