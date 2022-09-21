import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// NgRx modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Reducers
import { movieCreditsReducer } from './store/reducers/movie-credits.reducer';
import { movieDetailsReducer } from './store/reducers/movie-details.reducer';
import { nowPlayingMoviesReducer } from './store/reducers/now-playing-movies.reducer';
import { popularMoviesReducer } from './store/reducers/popular-movies.reducer';
import { searchReducer } from './store/reducers/search.reducer';

// Effects
import { MovieCreditsEffects } from './store/effects/movie-credits.effects';
import { MovieDetailsEffects } from './store/effects/movie-details.effects';
import { NowPlayingMoviesEffects } from './store/effects/now-playing-movies.effects';
import { PopularMoviesEffects } from './store/effects/popular-movies.effects';
import { SearchEffects } from './store/effects/search.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    // Reducers
    StoreModule.forFeature('movieCredits', movieCreditsReducer),
    StoreModule.forFeature('movieDetails', movieDetailsReducer),
    StoreModule.forFeature('nowPlayingMovies', nowPlayingMoviesReducer),
    StoreModule.forFeature('popularMovies', popularMoviesReducer),
    StoreModule.forFeature('searchResults', searchReducer),
    // Effects
    EffectsModule.forRoot([
      MovieCreditsEffects,
      MovieDetailsEffects,
      NowPlayingMoviesEffects,
      PopularMoviesEffects,
      SearchEffects,
    ]),
    // NgRx DevTools
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
