import { Movie } from './tmdb.interface';

export interface MoviesState {
  isLoading: boolean;
  movies: Movie[];
  error: string | null;
}
