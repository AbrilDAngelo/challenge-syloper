import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/tmdb.interface';
import {
  isLoadingSelector as isLoadingNowPlayingMoviesSelector,
  entitiesSelector as nowPlayingMoviesSelector,
  errorSelector as nowPlayingMoviesErrorSelector,
} from 'src/app/store/selectors/now-playing-movies.selectors';
import {
  isLoadingSelector as isLoadingPopularMoviesSelector,
  entitiesSelector as popularMoviesSelector,
  errorSelector as popularMoviesErrorSelector,
} from 'src/app/store/selectors/popular-movies.selectors';
import { AppState } from '../../interfaces/app-state.interface';
import * as nowPlayingMovieActions from '../../store/actions/now-playing-movies.actions';
import * as popularMovieActions from '../../store/actions/popular-movies.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  // Observables
  isLoadingNowPlayingMovies$: Observable<boolean>;
  isLoadingPopularMovies$: Observable<boolean>;
  nowPlayingMovies$: Observable<Movie[] | null>;
  popularMovies$: Observable<Movie[] | null>;
  nowPlayingMoviesError$: Observable<string | null>;
  popularMoviesError$: Observable<string | null>;

  // Inyección de dependencias e inicialización de observables
  constructor(private store: Store<AppState>) {
    this.isLoadingNowPlayingMovies$ = this.store.pipe(
      select(isLoadingNowPlayingMoviesSelector)
    );
    this.isLoadingPopularMovies$ = this.store.pipe(
      select(isLoadingPopularMoviesSelector)
    );
    this.nowPlayingMovies$ = this.store.pipe(select(nowPlayingMoviesSelector));
    this.popularMovies$ = this.store.pipe(select(popularMoviesSelector));
    this.nowPlayingMoviesError$ = this.store.pipe(
      select(nowPlayingMoviesErrorSelector)
    );
    this.popularMoviesError$ = this.store.pipe(
      select(popularMoviesErrorSelector)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(nowPlayingMovieActions.loadNowPlayingMovies());
    this.store.dispatch(popularMovieActions.loadPopularMovies());
  }
}
