import { createAction, props } from '@ngrx/store';
import { Movie } from '../interfaces/tmdb.interface';

// Now playing movies
export const loadNowPlayingMovies = createAction(
  '[Movies] Load now playing movies'
);
export const loadNowPlayingMoviesSuccess = createAction(
  '[Movies] Load now playing movies success',
  props<{ nowPlayingMovies: Movie[] }>()
);
export const loadNowPlayingMoviesFailure = createAction(
  '[Movies] Load now playing movies failure',
  props<{ error: string }>()
);
// Popular movies
export const loadPopularMovies = createAction('[Movies] Load popular movies');
export const loadPopularMoviesSuccess = createAction(
  '[Movies] Load popular movies success',
  props<{ popularMovies: Movie[] }>()
);
export const loadPopularMoviesFailure = createAction(
  '[Movies] Load popular movies failure',
  props<{ error: string }>()
);
// Search results
export const loadSearchResults = createAction(
  '[Movies] Load search results',
  props<{ searchQuery: string }>()
);
export const loadSearchResultsSuccess = createAction(
  '[Movies] Load search results success',
  props<{ searchResultsMovies: Movie[] }>()
);
export const loadSearchResultsFailure = createAction(
  '[Movies] Load search results failure',
  props<{ error: string }>()
);
// Selected movie
export const setSelectedMovie = createAction(
  '[Movies] Set selected movie',
  props<{ movie: Movie }>()
);
// Search query
export const setSearchQuery = createAction(
  '[Movies] Set search query',
  props<{ searchQuery: string }>()
);
