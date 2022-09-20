import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  // Now playing movies
  loadNowPlayingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadNowPlayingMovies),
      mergeMap(() => {
        return this.moviesService.getNowPlayingMovies().pipe(
          map((res) =>
            MoviesActions.loadNowPlayingMoviesSuccess({
              nowPlayingMovies: res.results,
            })
          ),
          catchError((error) =>
            of(
              MoviesActions.loadNowPlayingMoviesFailure({
                error: error.message,
              })
            )
          )
        );
      })
    )
  );
  // Popular movies
  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadPopularMovies),
      mergeMap(() => {
        return this.moviesService.getPopularMovies().pipe(
          map((res) =>
            MoviesActions.loadPopularMoviesSuccess({
              popularMovies: res.results,
            })
          ),
          catchError((error) =>
            of(
              MoviesActions.loadPopularMoviesFailure({
                error: error.message,
              })
            )
          )
        );
      })
    )
  );
  // Search movie results
  loadSearchResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadSearchResults),
      switchMap((action) => {
        return this.moviesService.searchMovies(action.searchQuery).pipe(
          map((res) =>
            MoviesActions.loadSearchResultsSuccess({
              searchResultsMovies: res.results,
            })
          ),
          catchError((error) =>
            of(
              MoviesActions.loadSearchResultsFailure({
                error: error.message,
              })
            )
          )
        );
      })
    )
  );
  // Selected details
  loadSelectedMovieDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadSelectedMovieDetails),
      switchMap((action) => {
        return this.moviesService.getMovieById(action.movieId).pipe(
          map((res) =>
            MoviesActions.loadSelectedMovieDetailsSuccess({
              selectedMovieDetails: res,
            })
          ),
          catchError((error) =>
            of(
              MoviesActions.loadSelectedMovieDetailsFailure({
                error: error.message,
              })
            )
          )
        );
      })
    )
  );
  // Selected movie credits
  loadSelectedMovieCredits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadSelectedMovieCredits),
      switchMap((action) => {
        return this.moviesService.getMovieCredits(action.movieId).pipe(
          map((res) =>
            MoviesActions.loadSelectedMovieCreditsSuccess({
              selectedMovieCredits: res,
            })
          ),
          catchError((error) =>
            of(
              MoviesActions.loadSelectedMovieCreditsFailure({
                error: error.message,
              })
            )
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
