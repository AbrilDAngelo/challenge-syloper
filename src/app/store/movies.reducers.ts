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
  // Selected movie
  on(MoviesActions.setSelectedMovie, (state, action) => ({
    ...state,
    selectedMovie: action.movie,
  })),
  // Selected movie details
  on(MoviesActions.loadSelectedMovieDetails, (state, action) => ({
    ...state,
    isLoadingSelectedMovieDetails: true,
    selectedMovieId: action.movieId,
  })),
  on(MoviesActions.loadSelectedMovieDetailsSuccess, (state, action) => ({
    ...state,
    isLoadingSelectedMovieDetails: false,
    selectedMovieDetails: action.selectedMovieDetails,
  })),
  on(MoviesActions.loadSelectedMovieDetailsFailure, (state, action) => ({
    ...state,
    isLoadingSelectedMovieDetails: false,
    error: action.error,
  })),
  // Selected movie credits
  on(MoviesActions.loadSelectedMovieCredits, (state, action) => ({
    ...state,
    isLoadingSelectedMovieCredits: true,
    selectedMovieCreditsId: action.movieId,
  })),
  on(MoviesActions.loadSelectedMovieCreditsSuccess, (state, action) => ({
    ...state,
    isLoadingSelectedMovieCredits: false,
    selectedMovieCredits: action.selectedMovieCredits,
  })),
  on(MoviesActions.loadSelectedMovieCreditsFailure, (state, action) => ({
    ...state,
    isLoadingSelectedMovieCredits: false,
    error: action.error,
  })),
  // Search query
  on(MoviesActions.setSearchQuery, (state, action) => ({
    ...state,
    searchQuery: action.searchQuery,
  }))
);
