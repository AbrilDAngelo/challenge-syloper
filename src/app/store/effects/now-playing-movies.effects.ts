import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import * as actions from '../actions/now-playing-movies.actions';

@Injectable()
export class NowPlayingMoviesEffects {
  loadNowPlayingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadNowPlayingMovies),
      mergeMap(() => {
        return this.moviesService.getNowPlayingMovies().pipe(
          map((res) =>
            actions.loadNowPlayingMoviesSuccess({
              entities: res.results,
            })
          ),
          catchError((error) =>
            of(
              actions.loadNowPlayingMoviesFailure({
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
