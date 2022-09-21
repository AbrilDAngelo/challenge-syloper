import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import * as actions from '../actions/movie-credits.actions';

@Injectable()
export class MovieCreditsEffects {
  loadSelectedMovieCredits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMovieCredits),
      switchMap((action) => {
        return this.moviesService.getMovieCredits(action.movieId).pipe(
          map((res) =>
            actions.loadMovieCreditsSuccess({
              entities: res,
            })
          ),
          catchError((error) =>
            of(
              actions.loadMovieCreditsFailure({
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
