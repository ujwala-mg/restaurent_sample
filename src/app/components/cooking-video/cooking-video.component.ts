import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-cooking-video',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './cooking-video.component.html',
  styleUrl: './cooking-video.component.css'
})
export class CookingVideoComponent {
  // No cooking videos were supplied. Once available, drop files into
  // public/videos/ and point these at them — the <video> element below
  // is already wired for muted autoplay, loop, playsInline and a poster
  // fallback, and simply won't render video until a src exists.
  videoSrcMp4 = ''; // e.g. 'videos/tandoor.mp4'
  videoSrcWebm = ''; // e.g. 'videos/tandoor.webm'
  posterSrc = ''; // e.g. 'images/food/biryani.jpg'

  get hasVideo(): boolean {
    return !!(this.videoSrcMp4 || this.videoSrcWebm);
  }
}
