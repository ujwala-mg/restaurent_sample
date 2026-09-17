import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Adds a `.is-visible` class the first time an element scrolls into view.
 * CSS in each component decides what that class actually animates.
 * Respects prefers-reduced-motion by revealing immediately.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.renderer.addClass(this.el.nativeElement, 'reveal');

    if (prefersReduced || !('IntersectionObserver' in window)) {
      this.renderer.addClass(this.el.nativeElement, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
