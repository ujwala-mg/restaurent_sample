import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { galleryPlaceholders, GalleryPlaceholder } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-food-gallery',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './food-gallery.component.html',
  styleUrl: './food-gallery.component.css'
})
export class FoodGalleryComponent {
  items = galleryPlaceholders;
  lightbox: GalleryPlaceholder | null = null;

  open(item: GalleryPlaceholder): void {
    this.lightbox = item;
  }

  close(): void {
    this.lightbox = null;
  }
}
