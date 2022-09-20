import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/movies.reducers';
import { MoviesEffects } from '../store/movies.effects';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    PipesModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MoviesEffects]),
  ],
})
export class PagesModule {}
