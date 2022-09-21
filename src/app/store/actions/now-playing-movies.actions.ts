import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/tmdb.interface';

export const loadNowPlayingMovies = createAction(
  '[Movies] Load now playing movies'
);
export const loadNowPlayingMoviesSuccess = createAction(
  '[Movies] Load now playing movies success',
  props<{ entities: Movie[] }>()
);
export const loadNowPlayingMoviesFailure = createAction(
  '[Movies] Load now playing movies failure',
  props<{ error: string }>()
);
