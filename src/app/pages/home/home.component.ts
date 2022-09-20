import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/tmdb.interface';
import { AppState } from '../../interfaces/app-state.interface';
import * as MovieActions from '../../store/movies.actions';
import {
  isLoadingPopularSelector,
  nowPlayingMoviesSelector,
  popularMoviesSelector,
} from '../../store/movies.selectors';
import {
  errorSelector,
  isLoadingNowPlayingSelector,
} from '../../store/movies.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  isLoadingNowPlayingMovies$: Observable<boolean>;
  isLoadingPopularMovies$: Observable<boolean>;
  error$: Observable<string | null>;
  nowPlayingMovies$: Observable<Movie[]>;
  popularMovies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {
    this.isLoadingNowPlayingMovies$ = this.store.pipe(
      select(isLoadingNowPlayingSelector)
    );
    this.isLoadingPopularMovies$ = this.store.pipe(
      select(isLoadingPopularSelector)
    );
    this.error$ = this.store.pipe(select(errorSelector));
    this.nowPlayingMovies$ = this.store.pipe(select(nowPlayingMoviesSelector));
    this.popularMovies$ = this.store.pipe(select(popularMoviesSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(MovieActions.loadNowPlayingMovies());
    this.store.dispatch(MovieActions.loadPopularMovies());
  }
}
