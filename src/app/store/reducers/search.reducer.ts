import { createReducer, on } from '@ngrx/store';
import { SearchState } from 'src/app/interfaces/search-state.interface';
import * as actions from '../actions/search.actions';

export const initialState: SearchState = {
  isLoading: false,
  entities: null,
  error: null,
  searchQuery: null,
};
export const searchReducer = createReducer(
  initialState,
  on(actions.loadSearchResults, (state, action) => ({
    ...state,
    isLoading: true,
    searchQuery: action.searchQuery,
  })),
  on(actions.loadSearchResultsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    entities: action.entities,
  })),
  on(actions.loadSearchResultsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
