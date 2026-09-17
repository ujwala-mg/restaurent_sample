import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.css'
})
export class OurStoryComponent {}
