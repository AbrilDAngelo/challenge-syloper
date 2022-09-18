import { createAction, props } from '@ngrx/store';
import { Movie, ResponseTMDB } from '../interfaces/tmdb.interface';

export const loadMovies = createAction('[Movies] Load Movies');
export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies success',
  props<{ movies: Movie[] }>()
);
export const loadMoviesFailure = createAction(
  '[Movies] Load Movies failure',
  props<{ error: string }>()
);
