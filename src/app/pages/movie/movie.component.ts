import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { Observable } from 'rxjs';
import { Cast } from 'src/app/interfaces/tmdb.interface';
import {
  selectedMovieDetailsSelector,
  selectedMovieCreditsSelector,
} from '../../store/movies.selectors';
import { MovieDetails, Credits } from '../../interfaces/tmdb.interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as MovieActions from '../../store/movies.actions';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass'],
})
export class MovieComponent implements OnInit {
  selectedMovieDetails$: Observable<MovieDetails | null>;
  selectedMovieDetails!: MovieDetails;
  selectedMovieCredits$: Observable<Credits | null>;
  cast!: Cast[];
  movieId!: number;
  noImgUrl = '../../../../assets/no-image-banner.png';

  constructor(
    private store: Store<AppState>,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.selectedMovieDetails$ = this.store.pipe(
      select(selectedMovieDetailsSelector)
    );
    this.selectedMovieCredits$ = this.store.pipe(
      select(selectedMovieCreditsSelector)
    );
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.movieId = params['id'];
      this.store.dispatch(
        MovieActions.loadSelectedMovieDetails({ movieId: this.movieId })
      );
      this.store.dispatch(
        MovieActions.loadSelectedMovieCredits({ movieId: this.movieId })
      );
      this.selectedMovieDetails$.subscribe((res) => {
        if (res !== null) {
          this.selectedMovieDetails = res;
        }
      });
      this.selectedMovieCredits$.subscribe((res) => {
        if (res !== null) {
          this.cast = res.cast.slice(0, 6);
        }
      });
    });
  }

  // Código alternativo para regresar a la locación anterior en lugar de home
  // goBack() {
  //   this.location.back();
  // }
}
