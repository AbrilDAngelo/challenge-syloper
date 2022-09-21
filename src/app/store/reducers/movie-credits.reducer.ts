import { createReducer, on } from '@ngrx/store';
import { MovieCreditsState } from 'src/app/interfaces/movie-credits-state.interface';
import * as actions from '../actions/movie-credits.actions';

export const initialState: MovieCreditsState = {
  isLoading: false,
  entities: null,
  movieId: null,
  error: null,
};
export const movieCreditsReducer = createReducer(
  initialState,
  on(actions.loadMovieCredits, (state, action) => ({
    ...state,
    isLoading: true,
    movieId: action.movieId,
  })),
  on(actions.loadMovieCreditsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    entities: action.entities,
  })),
  on(actions.loadMovieCreditsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
