import { createAction, props } from '@ngrx/store';
import { Movie } from '../interfaces/tmdb.interface';

export const loadMovies = createAction('[Movies] Load Movies');
export const loadMoviesSuccess = createAction(
  '[Movies] Load movies success',
  props<{ movies: Movie[] }>()
);
export const loadMoviesFailure = createAction(
  '[Movies] Load movies failure',
  props<{ error: string }>()
);
export const setSelectedMovie = createAction(
  '[Movies] Set selected movie',
  props<{ movie: Movie }>()
);
