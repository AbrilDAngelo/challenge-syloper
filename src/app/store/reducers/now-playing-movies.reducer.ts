import { createReducer, on } from '@ngrx/store';
import { NowPlayingMoviesState } from 'src/app/interfaces/now-playing-movies-state.interface';
import * as actions from '../actions/now-playing-movies.actions';

export const initialState: NowPlayingMoviesState = {
  isLoading: false,
  entities: null,
  error: null,
};
export const nowPlayingMoviesReducer = createReducer(
  initialState,
  on(actions.loadNowPlayingMovies, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(actions.loadNowPlayingMoviesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    entities: action.entities,
  })),
  on(actions.loadNowPlayingMoviesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
