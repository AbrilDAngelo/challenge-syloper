import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/tmdb.interface';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import * as MovieActions from '../../store/movies.actions';
import { searchResultsMoviesSelector } from '../../store/movies.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  query!: string;
  debouncer: Subject<string> = new Subject();
  showSuggestions: boolean = false;
  searchResults$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {
    this.searchResults$ = this.store.pipe(select(searchResultsMoviesSelector));
  }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(() => {
      this.searchSuggestions();
    });
  }
  keyPressed() {
    this.debouncer.next(this.query);
  }
  searchSuggestions() {
    if (this.query.trim().length === 0) {
      this.showSuggestions = false;
      return;
    }
    this.store.dispatch(
      MovieActions.loadSearchResults({ searchQuery: this.query })
    );
    this.showSuggestions = true;
  }

  searchMovies() {
    this.store.dispatch(
      MovieActions.loadSearchResults({ searchQuery: this.query })
    );
    this.showSuggestions = true;
  }

  selectMovie(movie: Movie) {
    this.showSuggestions = false;
    this.query = '';
    this.store.dispatch(MovieActions.setSelectedMovie({ movie: movie }));
  }
}
