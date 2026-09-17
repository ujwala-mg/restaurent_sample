import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighwayStopComponent } from './components/highway-stop/highway-stop.component';
import { SignatureDishesComponent } from './components/signature-dishes/signature-dishes.component';
import { CookingVideoComponent } from './components/cooking-video/cooking-video.component';
import { MenuComponent } from './components/menu/menu.component';
import { FoodGalleryComponent } from './components/food-gallery/food-gallery.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LocationComponent } from './components/location/location.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileBottomBarComponent } from './components/mobile-bottom-bar/mobile-bottom-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    HighwayStopComponent,
    SignatureDishesComponent,
    CookingVideoComponent,
    MenuComponent,
    FoodGalleryComponent,
    ExperienceComponent,
    OurStoryComponent,
    ReviewsComponent,
    LocationComponent,
    FinalCtaComponent,
    FooterComponent,
    MobileBottomBarComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-highway-stop></app-highway-stop>
      <app-signature-dishes></app-signature-dishes>
      <app-cooking-video></app-cooking-video>
      <app-menu></app-menu>
      <app-food-gallery></app-food-gallery>
      <app-experience></app-experience>
      <app-our-story></app-our-story>
      <app-reviews></app-reviews>
      <app-location></app-location>
      <app-final-cta></app-final-cta>
    </main>
    <app-footer></app-footer>
    <app-mobile-bottom-bar></app-mobile-bottom-bar>
  `
})
export class AppComponent {}
