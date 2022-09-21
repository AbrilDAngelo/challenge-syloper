import { Movie } from './tmdb.interface';

export interface NowPlayingMoviesState {
  isLoading: boolean;
  entities: Movie[] | null;
  error: string | null;
}
