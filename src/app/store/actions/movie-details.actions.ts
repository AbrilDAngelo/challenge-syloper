import { createAction, props } from '@ngrx/store';
import { MovieDetails } from 'src/app/interfaces/tmdb.interface';

export const loadMovieDetails = createAction(
  '[Movies] Load movie details',
  props<{ movieId: number }>()
);
export const loadMovieDetailsSuccess = createAction(
  '[Movies] Load movie details success',
  props<{ entities: MovieDetails }>()
);
export const loadMovieDetailsFailure = createAction(
  '[Movies] Load movie details failure',
  props<{ error: string }>()
);
