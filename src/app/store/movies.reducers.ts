import { createReducer, on } from '@ngrx/store';
import { MoviesState } from '../interfaces/movies-state.interface';
import * as MoviesActions from './movies.actions';

export const initialState: MoviesState = {
  isLoading: false,
  movies: [],
  error: null,
  selectedMovie: null,
};

export const reducers = createReducer(
  initialState,
  on(MoviesActions.loadMovies, (state) => ({ ...state, isLoading: true })),
  on(MoviesActions.loadMoviesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    movies: action.movies,
  })),
  on(MoviesActions.loadMoviesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(MoviesActions.setSelectedMovie, (state, action) => ({
    ...state,
    selectedMovie: action.movie,
  }))
);
