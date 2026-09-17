import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { highwayBenefits } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-highway-stop',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './highway-stop.component.html',
  styleUrl: './highway-stop.component.css'
})
export class HighwayStopComponent {
  benefits = highwayBenefits;
}
