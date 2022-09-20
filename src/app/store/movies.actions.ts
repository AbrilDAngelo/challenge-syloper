import { createAction, props } from '@ngrx/store';
import { Movie, MovieDetails, Credits } from '../interfaces/tmdb.interface';

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
export const loadSelectedMovieDetails = createAction(
  '[Movies] Load selected movie details',
  props<{ movieId: number }>()
);
export const loadSelectedMovieDetailsSuccess = createAction(
  '[Movies] Load selected movie details success',
  props<{ selectedMovieDetails: MovieDetails }>()
);
export const loadSelectedMovieDetailsFailure = createAction(
  '[Movies] Load selected movie details failure',
  props<{ error: string }>()
);

// Load movie credits
export const loadSelectedMovieCredits = createAction(
  '[Movies] Load selected movie credits',
  props<{ movieId: number }>()
);
export const loadSelectedMovieCreditsSuccess = createAction(
  '[Movies] Load selected movie credits success',
  props<{ selectedMovieCredits: Credits }>()
);
export const loadSelectedMovieCreditsFailure = createAction(
  '[Movies] Load selected movie credits failure',
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
