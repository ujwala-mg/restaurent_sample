import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { restaurant } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  restaurant = restaurant;
  scrolled = false;
  mobileOpen = false;

  links = [
    { label: 'Home', href: '#top' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Food', href: '#food' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile(): void {
    this.mobileOpen = false;
  }
}
