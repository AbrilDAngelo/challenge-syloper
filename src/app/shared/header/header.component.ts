import { Component, OnInit } from '@angular/core';
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
  btnClicked = false;
  debouncer: Subject<string> = new Subject();
  showSuggestions: boolean = false;

  // Inyección de dependencias e inicialización de observables
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
    });
  }
  // Uso de debouncer para evitar sugerencias inmediatas
  keyPressed() {
    this.debouncer.next(this.query);
  }
  // Buscar sugerencias
  searchSuggestions() {
    // Verificación de query no vacío
    if (this.query.trim().length === 0) {
      this.showSuggestions = false;
      return;
    }
    // Carga de sugerencias
    this.store.dispatch(
      searchActions.loadSuggestions({ searchQuery: this.query })
    );
    this.showSuggestions = true;
  }
  // Búsqueda de resultados
  searchResults() {
    // Verificación de query no vacío
    if (this.query.trim().length === 0) {
      return;
    }
    // Si query ok navega a la página de resultados enviando queryParams
    this.router.navigate(['/search'], {
      queryParams: { query: this.query },
    });
    // Limpieza de sugerencias e input
    this.clearQuery();
  }
  // Limpieza de input
  clearQuery() {
    this.query = '';
    this.showSuggestions = false;
  }
}
