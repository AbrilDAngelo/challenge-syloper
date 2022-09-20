import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/tmdb.interface';
import { AppState } from '../../interfaces/app-state.interface';
import * as actions from '../../store/movies.actions';
import {
  errorSelector,
  isLoadingSelector,
  moviesSelector,
} from '../../store/movies.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  movies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.movies$ = this.store.pipe(select(moviesSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(actions.loadNowPlayingMovies());
  }
}
