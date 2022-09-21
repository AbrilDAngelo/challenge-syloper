import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/tmdb.interface';

export const loadNowPlayingMovies = createAction(
  '[Now Playing Movies] Load movies'
);
export const loadNowPlayingMoviesSuccess = createAction(
  '[Now Playing Movies] Load movies success',
  props<{ entities: Movie[] }>()
);
export const loadNowPlayingMoviesFailure = createAction(
  '[Now Playing Movies] Load movies failure',
  props<{ error: string }>()
);
