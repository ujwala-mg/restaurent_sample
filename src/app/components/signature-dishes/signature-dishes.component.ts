import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { signatureDishes, highlightedFoodGroups } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-signature-dishes',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './signature-dishes.component.html',
  styleUrl: './signature-dishes.component.css'
})
export class SignatureDishesComponent {
  dishes = signatureDishes;
  groups = highlightedFoodGroups;
}
