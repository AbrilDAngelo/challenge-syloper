import { Movie } from './tmdb.interface';

export interface PopularMoviesState {
  isLoading: boolean;
  entities: Movie[] | null;
  error: string | null;
}
