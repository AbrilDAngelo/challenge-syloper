import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/tmdb.interface';

export const loadPopularMovies = createAction('[Movies] Load popular movies');
export const loadPopularMoviesSuccess = createAction(
  '[Movies] Load popular movies success',
  props<{ entities: Movie[] }>()
);
export const loadPopularMoviesFailure = createAction(
  '[Movies] Load popular movies failure',
  props<{ error: string }>()
);
