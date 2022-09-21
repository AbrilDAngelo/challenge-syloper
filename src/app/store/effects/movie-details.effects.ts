import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import * as actions from '../actions/movie-details.actions';

@Injectable()
export class MovieDetailsEffects {
  loadSelectedMovieDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMovieDetails),
      switchMap((action) => {
        return this.moviesService.getMovieById(action.movieId).pipe(
          map((res) =>
            actions.loadMovieDetailsSuccess({
              entities: res,
            })
          ),
          catchError((error) =>
            of(
              actions.loadMovieDetailsFailure({
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
