import { createReducer, on } from '@ngrx/store';
import { PopularMoviesState } from 'src/app/interfaces/popular-movies-state.interface';
import * as actions from '../actions/popular-movies.actions';

export const initialState: PopularMoviesState = {
  isLoading: false,
  entities: null,
  error: null,
};
export const popularMoviesReducer = createReducer(
  initialState,
  on(actions.loadPopularMovies, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(actions.loadPopularMoviesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    entities: action.entities,
  })),
  on(actions.loadPopularMoviesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
