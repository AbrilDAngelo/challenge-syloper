import { createReducer, on } from '@ngrx/store';
import { MoviesState } from '../interfaces/movies-state.interface';
import * as MoviesActions from './movies.actions';

export const initialState: MoviesState = {
  isLoadingNowPlayingMovies: false,
  isLoadingSearchResultsMovies: false,
  isLoadingPopularMovies: false,
  isLoadingSelectedMovie: false,
  nowPlayingMovies: [],
  popularMovies: [],
  searchResultsMovies: [],
  error: null,
  selectedMovie: null,
  searchQuery: null,
};

export const reducers = createReducer(
  initialState,
  // Now playing
  on(MoviesActions.loadNowPlayingMovies, (state) => ({
    ...state,
    isLoadingNowPlayingMovies: true,
  })),
  on(MoviesActions.loadNowPlayingMoviesSuccess, (state, action) => ({
    ...state,
    isLoadingNowPlayingMovies: false,
    nowPlayingMovies: action.nowPlayingMovies,
  })),
  on(MoviesActions.loadNowPlayingMoviesFailure, (state, action) => ({
    ...state,
    isLoadingNowPlayingMovies: false,
    error: action.error,
  })),
  // Popular
  on(MoviesActions.loadPopularMovies, (state) => ({
    ...state,
    isLoadingPopularMovies: true,
  })),
  on(MoviesActions.loadPopularMoviesSuccess, (state, action) => ({
    ...state,
    isLoadingPopularMovies: false,
    popularMovies: action.popularMovies,
  })),
  on(MoviesActions.loadPopularMoviesFailure, (state, action) => ({
    ...state,
    isLoadingPopularMovies: false,
    error: action.error,
  })),
  // Search results
  on(MoviesActions.loadSearchResults, (state) => ({
    ...state,
    isLoadingSearchResultsMovies: true,
  })),
  on(MoviesActions.loadSearchResultsSuccess, (state, action) => ({
    ...state,
    isLoadingSearchResultsMovies: false,
    searchResultsMovies: action.searchResultsMovies,
  })),
  on(MoviesActions.loadSearchResultsFailure, (state, action) => ({
    ...state,
    isLoadingSearchResultsMovies: false,
    error: action.error,
  })),
  // Selected
  on(MoviesActions.setSelectedMovie, (state, action) => ({
    ...state,
    selectedMovie: action.movie,
  })),
  // Search query
  on(MoviesActions.setSearchQuery, (state, action) => ({
    ...state,
    searchQuery: action.searchQuery,
  }))
);
