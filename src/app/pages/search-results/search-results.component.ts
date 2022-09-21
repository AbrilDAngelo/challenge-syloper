import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { Movie } from '../../interfaces/tmdb.interface';
import * as searchActions from '../../store/actions/search.actions';
import { ActivatedRoute } from '@angular/router';
import {
  isLoadingResultsSelector,
  entitiesResultsSelector,
  errorSelector as searchResultsErrorSelector,
} from 'src/app/store/selectors/search.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass'],
})
export class SearchResultsComponent implements OnInit {
  // Observables
  searchResults$: Observable<Movie[] | null>;
  isLoadingSearchResults$: Observable<boolean>;
  searchResultsError$: Observable<string | null>;

  searchResults!: Movie[] | null;
  searchQuery!: string;

  // Inyección de dependencias e inicialización de observables
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.isLoadingSearchResults$ = this.store.pipe(
      select(isLoadingResultsSelector)
    );
    this.searchResults$ = this.store.pipe(select(entitiesResultsSelector));
    this.searchResultsError$ = this.store.pipe(
      select(searchResultsErrorSelector)
    );
  }

  ngOnInit(): void {
    // Obtención del searchQuery de query params
    this.activatedRoute.queryParams.subscribe((params) => {
      if (!params['query']) {
        this.searchQuery = '';
      } else {
        this.searchQuery = params['query'];
      }
      // Carga de resultados
      this.store.dispatch(
        searchActions.loadSearchResults({ searchQuery: this.searchQuery })
      );
    });
  }
}
