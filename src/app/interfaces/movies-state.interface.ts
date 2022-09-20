import { Movie } from './tmdb.interface';

export interface MoviesState {
  isLoadingNowPlayingMovies: boolean;
  isLoadingSearchResultsMovies: boolean;
  isLoadingPopularMovies: boolean;
  isLoadingSelectedMovie: boolean;
  nowPlayingMovies: Movie[];
  searchResultsMovies: Movie[];
  popularMovies: Movie[];
  error: string | null;
  selectedMovie: Movie | null;
  searchQuery: string | null;
}
