import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorCarouselCardComponent } from './actor-carousel-card/actor-carousel-card.component';
import { MovieCarouselCardComponent } from './movie-carousel-card/movie-carousel-card.component';
import { MovieResultCardComponent } from './movie-result-card/movie-result-card.component';

@NgModule({
  declarations: [
    ActorCarouselCardComponent,
    MovieCarouselCardComponent,
    MovieResultCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    ActorCarouselCardComponent,
    MovieCarouselCardComponent,
    MovieResultCardComponent,
  ],
})
export class ComponentsModule {}
