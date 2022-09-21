import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject } from 'rxjs';
import { Movie } from '../../interfaces/tmdb.interface';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import * as searchActions from '../../store/actions/search.actions';
import { Router } from '@angular/router';
import {
  entitiesSuggestionsSelector,
  isLoadingSuggestionsSelector,
} from 'src/app/store/selectors/search.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  // Observables
  isLoadingSearchSuggestions$: Observable<boolean>;
  searchSuggestions$: Observable<Movie[] | null>;

  query!: string;
  debouncer: Subject<string> = new Subject();
  showSuggestions: boolean = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoadingSearchSuggestions$ = this.store.pipe(
      select(isLoadingSuggestionsSelector)
    );
    this.searchSuggestions$ = this.store.pipe(
      select(entitiesSuggestionsSelector)
    );
  }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(() => {
      this.searchSuggestions();
      document
        .getElementById('searchBox')
        ?.addEventListener('blur', () => this.clearQuery());
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
      searchActions.loadSuggestions({ searchQuery: this.query })
    );
    this.showSuggestions = true;
  }

  searchResults() {
    if (this.query.trim().length === 0) {
      return;
    }
    this.router.navigate(['/search'], {
      queryParams: { query: this.query },
    });
    this.showSuggestions = false;
    this.clearQuery();
  }

  clearQuery() {
    console.log('Hola');
    this.query = '';
  }
}
