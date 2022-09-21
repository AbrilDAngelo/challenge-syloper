import { Movie } from './tmdb.interface';

export interface SearchState {
  isLoadingSuggestions: boolean;
  isLoadingResults: boolean;
  entitiesSuggestions: Movie[] | null;
  entitiesResults: Movie[] | null;
  searchQuery: string | null;
  error: string | null;
}
