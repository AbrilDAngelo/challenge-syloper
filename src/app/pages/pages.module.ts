import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { NowPlayingMoviesEffects } from '../store/effects/now-playing-movies.effects';
import { PopularMoviesEffects } from '../store/effects/popular-movies.effects';
import { MovieCreditsEffects } from '../store/effects/movie-credits.effects';
import { MovieDetailsEffects } from '../store/effects/movie-details.effects';
import { SearchEffects } from '../store/effects/search.effects';
import { nowPlayingMoviesReducer } from '../store/reducers/now-playing-movies.reducer';

@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    PipesModule,
  ],
})
export class PagesModule {}
