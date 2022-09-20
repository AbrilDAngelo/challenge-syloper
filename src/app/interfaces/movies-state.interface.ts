import { Movie, MovieDetails, Credits } from './tmdb.interface';

export interface MoviesState {
  isLoadingNowPlayingMovies: boolean;
  isLoadingSearchResultsMovies: boolean;
  isLoadingPopularMovies: boolean;
  isLoadingSelectedMovie: boolean;
  isLoadingSelectedMovieDetails: boolean;
  isLoadingSelectedMovieCredits: boolean;
  nowPlayingMovies: Movie[];
  searchResultsMovies: Movie[];
  popularMovies: Movie[];
  error: string | null;
  selectedMovie: Movie | null;
  selectedMovieDetails: MovieDetails | null;
  selectedMovieCredits: Credits | null;
  searchQuery: string | null;
}
