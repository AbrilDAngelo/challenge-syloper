import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
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
  // Inyección de dependencias
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
