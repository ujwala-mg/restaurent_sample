import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { ratings, reviews } from '../../shared/data/restaurant-data';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('statBlock') statBlock?: ElementRef<HTMLElement>;

  ratings = ratings;
  reviews = reviews;

  googleCount = 0;
  tripCount = 0;

  private observer?: IntersectionObserver;
  private started = false;

  ngOnInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.finish();
      return;
    }
  }

  ngAfterViewInit(): void {
    if (!this.statBlock) return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !this.started) {
          this.started = true;
          this.animateCounts();
          this.observer?.disconnect();
        }
      });
    }, { threshold: 0.4 });
    this.observer.observe(this.statBlock.nativeElement);
  }

  private animateCounts(): void {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      this.finish();
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const targetGoogle = this.ratings.google.count;
    const targetTrip = this.ratings.tripadvisor.count;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.googleCount = Math.round(targetGoogle * eased);
      this.tripCount = Math.round(targetTrip * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  private finish(): void {
    this.googleCount = this.ratings.google.count;
    this.tripCount = this.ratings.tripadvisor.count;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
