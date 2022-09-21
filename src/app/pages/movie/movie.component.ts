import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { Observable } from 'rxjs';
import {
  selectedMovieDetailsSelector,
  selectedMovieCreditsSelector,
} from '../../store/movies.selectors';
import { MovieDetails, Credits } from '../../interfaces/tmdb.interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as MovieActions from '../../store/movies.actions';
import {
  isLoadingSelectedDetailsSelector,
  isLoadingSelectedCreditsSelector,
} from '../../store/movies.selectors';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass'],
})
export class MovieComponent implements OnInit {
  // Observables
  isLoadingSelectedMovieDetails$: Observable<boolean>;
  isLoadingSelectedMovieCredits$: Observable<boolean>;
  selectedMovieDetails$: Observable<MovieDetails | null>;
  selectedMovieCredits$: Observable<Credits | null>;

  movieId!: number;
  // Fallback imagen de perfil
  noImgUrl = '../../../../assets/no-poster.jpg';

  // Inyección de dependencias e inicialización de observables
  constructor(
    private store: Store<AppState>,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.isLoadingSelectedMovieDetails$ = this.store.pipe(
      select(isLoadingSelectedDetailsSelector)
    );
    this.isLoadingSelectedMovieCredits$ = this.store.pipe(
      select(isLoadingSelectedCreditsSelector)
    );
    this.selectedMovieDetails$ = this.store.pipe(
      select(selectedMovieDetailsSelector)
    );
    this.selectedMovieCredits$ = this.store.pipe(
      select(selectedMovieCreditsSelector)
    );
  }

  ngOnInit(): void {
    // Obtención del id de la película de query params
    this.activatedRoute.queryParams.subscribe((params) => {
      this.movieId = params['id'];
      // Carga de detalles de película
      this.store.dispatch(
        MovieActions.loadSelectedMovieDetails({ movieId: this.movieId })
      );
      // Carga de credits de película
      this.store.dispatch(
        MovieActions.loadSelectedMovieCredits({ movieId: this.movieId })
      );
    });
  }

  // Código alternativo para regresar a la locación anterior en lugar de home
  // goBack() {
  //   this.location.back();
  // }
}
