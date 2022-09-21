import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { Observable } from 'rxjs';
import { MovieDetails, Credits } from '../../interfaces/tmdb.interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  isLoadingSelector as isLoadingMovieDetailsSelector,
  entitiesSelector as movieDetailsSelector,
} from 'src/app/store/selectors/movie-details.selectors';
import {
  isLoadingSelector as isLoadingMovieCreditsSelector,
  entitiesSelector as movieCreditsSelector,
} from 'src/app/store/selectors/movie-credits.selectors';
import * as movieDetailsActions from '../../store/actions/movie-details.actions';
import * as movieCreditsActions from '../../store/actions/movie-credits.actions';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass'],
})
export class MovieComponent implements OnInit {
  // Observables
  isLoadingSelectedMovieDetails$: Observable<boolean>;
  isLoadingSelectedMovieCredits$: Observable<boolean>;
  movieDetails$: Observable<MovieDetails | null>;
  movieCredits$: Observable<Credits | null>;

  movieId!: number;

  // Inyección de dependencias e inicialización de observables
  constructor(
    private store: Store<AppState>,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.isLoadingSelectedMovieDetails$ = this.store.pipe(
      select(isLoadingMovieDetailsSelector)
    );
    this.isLoadingSelectedMovieCredits$ = this.store.pipe(
      select(isLoadingMovieCreditsSelector)
    );
    this.movieDetails$ = this.store.pipe(select(movieDetailsSelector));
    this.movieCredits$ = this.store.pipe(select(movieCreditsSelector));
  }

  ngOnInit(): void {
    // Obtención del id de la película de query params
    this.activatedRoute.queryParams.subscribe((params) => {
      this.movieId = params['id'];
      // Carga de detalles de película
      this.store.dispatch(
        movieDetailsActions.loadMovieDetails({ movieId: this.movieId })
      );
      // Carga de credits de película
      this.store.dispatch(
        movieCreditsActions.loadMovieCredits({ movieId: this.movieId })
      );
    });
  }

  // Código alternativo para regresar a la locación anterior en lugar de home
  // goBack() {
  //   this.location.back();
  // }
}
