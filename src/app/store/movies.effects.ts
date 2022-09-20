import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  loadNowPlayingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadNowPlayingMovies),
      mergeMap(() => {
        return this.moviesService.getNowPlaying().pipe(
          map((res) =>
            MoviesActions.loadNowPlayingMoviesSuccess({ movies: res.results })
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

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
