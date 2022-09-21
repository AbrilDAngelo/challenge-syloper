import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state.interface';

export const selectFeature = (state: AppState) => state.searchResults;

export const isLoadingSuggestionsSelector = createSelector(
  selectFeature,
  (state) => state.isLoadingSuggestions
);
export const isLoadingResultsSelector = createSelector(
  selectFeature,
  (state) => state.isLoadingResults
);
export const entitiesResultsSelector = createSelector(
  selectFeature,
  (state) => state.entitiesResults
);
export const entitiesSuggestionsSelector = createSelector(
  selectFeature,
  (state) => state.entitiesSuggestions
);
export const searchQuerySelector = createSelector(
  selectFeature,
  (state) => state.searchQuery
);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
