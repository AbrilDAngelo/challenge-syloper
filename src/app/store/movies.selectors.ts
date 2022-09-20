import { createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';

export const selectFeature = (state: AppState) => state.movies;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const moviesSelector = createSelector(
  selectFeature,
  (state) => state.movies
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

export const selectedMovieSelector = createSelector(
  selectFeature,
  (state) => state.selectedMovie
);
