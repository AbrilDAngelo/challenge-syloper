import { createReducer, on } from '@ngrx/store';
import { MoviesState } from '../interfaces/movies-state.interface';
import * as MoviesActions from './movies.actions';

export const initialState: MoviesState = {
  isLoadingNowPlayingMovies: false,
  isLoadingSearchResultsMovies: false,
  isLoadingPopularMovies: false,
  isLoadingSelectedMovie: false,
  isLoadingSelectedMovieDetails: false,
  isLoadingSelectedMovieCredits: false,
  nowPlayingMovies: [],
  popularMovies: [],
  searchResultsMovies: [],
  error: null,
  selectedMovie: null,
  selectedMovieDetails: null,
  selectedMovieCredits: null,
  searchQuery: null,
};

export const reducers = createReducer(
  initialState,
  // Now playing
  // Popular
  // Search results
  // Selected movie
  
  // Selected movie details
  // Selected movie credits
  // Search query
  
);
