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
  searchQuery!: string;
  searchResults$: Observable<Movie[]>;
  searchResults!: Movie[];
  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchResults$ = this.store.pipe(select(searchResultsMoviesSelector));
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (!params['query']) {
        this.searchQuery = '';
      } else {
        this.searchQuery = params['query'];
      }
      this.store.dispatch(
        MovieActions.loadSearchResults({ searchQuery: this.searchQuery })
      );
      this.searchResults$.subscribe((res) => {
        if (res !== null) {
          this.searchResults = res.slice(0,8);
        }
      });
    });
  }
}
