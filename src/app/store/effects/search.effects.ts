import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import * as actions from '../actions/search.actions';

@Injectable()
export class SearchEffects {
  loadSearchResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSearchResults),
      switchMap((action) => {
        return this.moviesService.searchMovies(action.searchQuery).pipe(
          map((res) =>
            actions.loadSearchResultsSuccess({
              entities: res.results,
            })
          ),
          catchError((error) =>
            of(
              actions.loadSearchResultsFailure({
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
