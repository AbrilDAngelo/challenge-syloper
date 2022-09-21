import { MovieCreditsState } from './movie-credits-state.interface';
import { MovieDetailsState } from './movie-details-state.interface';
import { NowPlayingMoviesState } from './now-playing-movies-state.interface';
import { PopularMoviesState } from './popular-movies-state.interface';
import { SearchState } from './search-state.interface';

export interface AppState {
  nowPlayingMovies: NowPlayingMoviesState;
  popularMovies: PopularMoviesState;
  searchResults: SearchState;
  movieCredits: MovieCreditsState;
  movieDetails: MovieDetailsState;
}
