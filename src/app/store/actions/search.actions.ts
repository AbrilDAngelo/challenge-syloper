import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/tmdb.interface';

// Suggestions
export const loadSuggestions = createAction(
  '[Load Suggestions] Load suggestions',
  props<{ searchQuery: string }>()
);
export const loadSuggestionsSuccess = createAction(
  '[Load Suggestions] Load suggestions success',
  props<{ entities: Movie[] }>()
);
export const loadSuggestionsFailure = createAction(
  '[Load Suggestions] Load suggestions failure',
  props<{ error: string }>()
);
// Results
export const loadSearchResults = createAction(
  '[Search Movies] Load results',
  props<{ searchQuery: string }>()
);
export const loadSearchResultsSuccess = createAction(
  '[Search Movies] Load results success',
  props<{ entities: Movie[] }>()
);
export const loadSearchResultsFailure = createAction(
  '[Search Movies] Load results failure',
  props<{ error: string }>()
);
