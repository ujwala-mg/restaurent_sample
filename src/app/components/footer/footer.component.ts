import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { restaurant } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  restaurant = restaurant;
  year = new Date().getFullYear();
  links = [
    { label: 'Home', href: '#top' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Food', href: '#food' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' }
  ];
}
