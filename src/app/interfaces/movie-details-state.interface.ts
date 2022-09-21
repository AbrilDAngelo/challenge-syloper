import { MovieDetails } from './tmdb.interface';

export interface MovieDetailsState {
  isLoading: boolean;
  entities: MovieDetails | null;
  movieId: number | null;
  error: string | null;
}
