import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';

export const selectFeature = (state: AppState) => state.searchResults;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
export const entitiesSelector = createSelector(
  selectFeature,
  (state) => state.entities
);
export const searchQuerySelector = createSelector(
  selectFeature,
  (state) => state.searchQuery
);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
