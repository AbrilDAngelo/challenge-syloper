import { createReducer, on } from '@ngrx/store';
import { MovieDetailsState } from 'src/app/interfaces/movie-details-state.interface';
import * as actions from '../actions/movie-details.actions';

export const initialState: MovieDetailsState = {
  isLoading: false,
  entities: null,
  movieId: null,
  error: null,
};
export const movieDetailsReducer = createReducer(
  initialState,
  on(actions.loadMovieDetails, (state, action) => ({
    ...state,
    isLoading: true,
    movieId: action.movieId,
  })),
  on(actions.loadMovieDetailsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    entities: action.entities,
  })),
  on(actions.loadMovieDetailsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
