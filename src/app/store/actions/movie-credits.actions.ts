import { createAction, props } from '@ngrx/store';
import { Credits } from 'src/app/interfaces/tmdb.interface';

export const loadMovieCredits = createAction(
  '[Movie Credits] Load credits',
  props<{ movieId: number }>()
);
export const loadMovieCreditsSuccess = createAction(
  '[Movie Credits] Load credits success',
  props<{ entities: Credits }>()
);
export const loadMovieCreditsFailure = createAction(
  '[Movie Credits] Load credits failure',
  props<{ error: string }>()
);
