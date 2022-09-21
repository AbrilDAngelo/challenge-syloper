import { createAction, props } from '@ngrx/store';
import { Credits } from 'src/app/interfaces/tmdb.interface';

export const loadMovieCredits = createAction(
  '[Movies] Load movie credits',
  props<{ movieId: number }>()
);
export const loadMovieCreditsSuccess = createAction(
  '[Movies] Load movie credits success',
  props<{ entities: Credits }>()
);
export const loadMovieCreditsFailure = createAction(
  '[Movies] Load movie credits failure',
  props<{ error: string }>()
);
