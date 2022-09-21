import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NowPlayingCarouselSlideComponent } from './now-playing-carousel-slide/now-playing-carousel-slide.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { RatingComponent } from './rating/rating.component';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    ActorCardComponent,
    MovieCardComponent,
    NowPlayingCarouselSlideComponent,
    RatingComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, RouterModule, PipesModule],
  exports: [
    ActorCardComponent,
    MovieCardComponent,
    NowPlayingCarouselSlideComponent,
    RatingComponent,
    SpinnerComponent,
  ],
})
export class ComponentsModule {}
