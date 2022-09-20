import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import * as MovieActions from '../../store/movies.actions';
import { Movie } from '../../interfaces/tmdb.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;

  ratingInt!: number;
  maxRating = 10;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.ratingInt = Math.round(this.movie.vote_average);
  }
  selectMovie() {
    this.store.dispatch(MovieActions.setSelectedMovie({ movie: this.movie }));
  }
}
