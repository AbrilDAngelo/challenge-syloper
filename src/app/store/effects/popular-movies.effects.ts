import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import * as actions from '../actions/popular-movies.actions';

@Injectable()
export class PopularMoviesEffects {
  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadPopularMovies),
      mergeMap(() => {
        return this.moviesService.getPopularMovies().pipe(
          map((res) =>
            actions.loadPopularMoviesSuccess({
              entities: res.results,
            })
          ),
          catchError((error) =>
            of(
              actions.loadPopularMoviesFailure({
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
