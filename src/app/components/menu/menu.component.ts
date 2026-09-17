import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { menuCategories, MenuCategory, restaurant } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  restaurant = restaurant;
  categories: MenuCategory[] = menuCategories;
  active: MenuCategory = this.categories[0];

  select(cat: MenuCategory): void {
    this.active = cat;
  }
}
