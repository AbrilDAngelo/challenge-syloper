import { createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';

export const selectFeature = (state: AppState) => state.movies;
// Loading
export const isLoadingNowPlayingSelector = createSelector(
  selectFeature,
  (state) => state.isLoadingNowPlayingMovies
);
export const isLoadingPopularSelector = createSelector(
  selectFeature,
  (state) => state.isLoadingPopularMovies
);
export const isLoadingSearchResultsSelector = createSelector(
  selectFeature,
  (state) => state.isLoadingSearchResultsMovies
);
export const isLoadingSelectedSelector = createSelector(
  selectFeature,
  (state) => state.isLoadingSelectedMovie
);
export const isLoadingSelectedDetailsSelector = createSelector(
  selectFeature,
  (state) => state.isLoadingSelectedMovieDetails
);
export const isLoadingSelectedCreditsSelector = createSelector(
  selectFeature,
  (state) => state.isLoadingSelectedMovieCredits
);
// Now playing
export const nowPlayingMoviesSelector = createSelector(
  selectFeature,
  (state) => state.nowPlayingMovies
);
// Popular
export const popularMoviesSelector = createSelector(
  selectFeature,
  (state) => state.popularMovies
);
// Search results
export const searchResultsMoviesSelector = createSelector(
  selectFeature,
  (state) => state.searchResultsMovies
);
// Error
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
// Selected
export const selectedMovieSelector = createSelector(
  selectFeature,
  (state) => state.selectedMovie
);
// Selected details
export const selectedMovieDetailsSelector = createSelector(
  selectFeature,
  (state) => state.selectedMovieDetails
);
// Selected credits
export const selectedMovieCreditsSelector = createSelector(
  selectFeature,
  (state) => state.selectedMovieCredits
);
// Search query
export const searchQuerySelector = createSelector(
  selectFeature,
  (state) => state.searchQuery
);
