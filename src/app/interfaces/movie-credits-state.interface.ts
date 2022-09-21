import { Credits } from './tmdb.interface';

export interface MovieCreditsState {
  isLoading: boolean;
  entities: Credits | null;
  movieId: number | null;
  error: string | null;
}
