import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject } from 'rxjs';
import { Movie } from '../../interfaces/tmdb.interface';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import * as searchActions from '../../store/actions/search.actions';
import { Router } from '@angular/router';
import {
  entitiesSelector as searchResultsSelector,
  isLoadingSelector as isLoadingSearchResultsSelector,
} from 'src/app/store/selectors/search.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  // Observables
  isLoadingSearchResults$: Observable<boolean>;
  searchResults$: Observable<Movie[] | null>;

  query!: string;
  debouncer: Subject<string> = new Subject();
  showSuggestions: boolean = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoadingSearchResults$ = this.store.pipe(
      select(isLoadingSearchResultsSelector)
    );
    this.searchResults$ = this.store.pipe(select(searchResultsSelector));
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
    console.log(this.query);
    this.store.dispatch(
      searchActions.loadSearchResults({ searchQuery: this.query })
    );
    this.showSuggestions = true;
  }

  searchMovies() {
    if (this.query.trim().length === 0) {
      return;
    }
    this.store.dispatch(
      searchActions.loadSearchResults({ searchQuery: this.query })
    );
    this.query = '';
    this.showSuggestions = false;
    this.router.navigate(['/search'], {
      queryParams: { query: this.query },
    });
  }

  selectMovie(movie: Movie) {
    this.showSuggestions = false;
    this.query = '';
  }
}
