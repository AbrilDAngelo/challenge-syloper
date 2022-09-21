import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/tmdb.interface';

// export const setSearchQuery = createAction(
//   '[Movies] Set search query',
//   props<{ searchQuery: string }>()
// );
export const loadSearchResults = createAction(
  '[Movies] Load search results',
  props<{ searchQuery: string }>()
);
export const loadSearchResultsSuccess = createAction(
  '[Movies] Load search results success',
  props<{ entities: Movie[] }>()
);
export const loadSearchResultsFailure = createAction(
  '[Movies] Load search results failure',
  props<{ error: string }>()
);
