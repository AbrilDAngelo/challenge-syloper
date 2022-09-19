import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorCarouselCardComponent } from './actor-carousel-card/actor-carousel-card.component';
import { MovieCarouselCardComponent } from './movie-carousel-card/movie-carousel-card.component';
import { MovieResultCardComponent } from './movie-result-card/movie-result-card.component';
import { NowPlayingCarouselSlideComponent } from './now-playing-carousel-slide/now-playing-carousel-slide.component';

@NgModule({
  declarations: [
    ActorCarouselCardComponent,
    MovieCarouselCardComponent,
    MovieResultCardComponent,
    NowPlayingCarouselSlideComponent,
  ],
  imports: [CommonModule],
  exports: [
    ActorCarouselCardComponent,
    MovieCarouselCardComponent,
    MovieResultCardComponent,
    NowPlayingCarouselSlideComponent,
  ],
})
export class ComponentsModule {}
