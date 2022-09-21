import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { Movie } from '../../interfaces/tmdb.interface';
import * as MovieActions from '../../store/movies.actions';
import { ActivatedRoute } from '@angular/router';
import { searchResultsMoviesSelector } from '../../store/movies.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass'],
})
export class SearchResultsComponent implements OnInit {
  // Observables
  searchResults$: Observable<Movie[]>;

  searchQuery!: string;
  searchResults!: Movie[];

  // Inyección de dependencias e inicialización de observables
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchResults$ = this.store.pipe(select(searchResultsMoviesSelector));
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
        MovieActions.loadSearchResults({ searchQuery: this.searchQuery })
      );
      // Suscripción a observable para solucionar error de 'object is possibly null' en template
      this.searchResults$.subscribe((res) => {
        if (res !== null) {
          // Mostrar los primeros 8 resultados
          this.searchResults = res.slice(0, 8);
        }
      });
    });
  }
}
