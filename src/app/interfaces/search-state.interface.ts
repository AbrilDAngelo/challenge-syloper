import { Movie } from "./tmdb.interface";

export interface SearchState {
  isLoading: boolean;
  entities: Movie[] | null;
  searchQuery: string | null;
  error: string | null;
}
