import { createReducer, on } from '@ngrx/store';
import { SearchState } from 'src/app/interfaces/search-state.interface';
import * as actions from '../actions/search.actions';

export const initialState: SearchState = {
  isLoadingSuggestions: false,
  isLoadingResults: false,
  entitiesSuggestions: null,
  entitiesResults: null,
  error: null,
  searchQuery: null,
};
export const searchReducer = createReducer(
  initialState,
  // Suggestions
  on(actions.loadSuggestions, (state, action) => ({
    ...state,
    isLoading: true,
    searchQuery: action.searchQuery,
  })),
  on(actions.loadSuggestionsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    entitiesSuggestions: action.entities,
  })),
  on(actions.loadSuggestionsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  // Results
  on(actions.loadSearchResults, (state, action) => ({
    ...state,
    isLoading: true,
    searchQuery: action.searchQuery,
  })),
  on(actions.loadSearchResultsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    entitiesResults: action.entities,
  })),
  on(actions.loadSearchResultsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
