import { createAction, props } from '@ngrx/store';
import { MovieDetails } from 'src/app/interfaces/tmdb.interface';

export const loadMovieDetails = createAction(
  '[Movie Details] Load details',
  props<{ movieId: number }>()
);
export const loadMovieDetailsSuccess = createAction(
  '[Movie Details] Load details success',
  props<{ entities: MovieDetails }>()
);
export const loadMovieDetailsFailure = createAction(
  '[Movie Details] Load details failure',
  props<{ error: string }>()
);
