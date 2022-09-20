import { createAction, props } from '@ngrx/store';
import { Movie } from '../interfaces/tmdb.interface';

export const loadNowPlayingMovies = createAction(
  '[Movies] Load now playing movies'
);
export const loadNowPlayingMoviesSuccess = createAction(
  '[Movies] Load now playing movies success',
  props<{ movies: Movie[] }>()
);
export const loadNowPlayingMoviesFailure = createAction(
  '[Movies] Load now playing movies failure',
  props<{ error: string }>()
);
export const setSelectedMovie = createAction(
  '[Movies] Set selected movie',
  props<{ movie: Movie }>()
);
