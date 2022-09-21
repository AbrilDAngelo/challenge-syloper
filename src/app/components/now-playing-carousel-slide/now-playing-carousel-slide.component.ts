import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { Movie } from 'src/app/interfaces/tmdb.interface';
import * as MovieActions from '../../store/movies.actions';

@Component({
  selector: 'app-now-playing-carousel-slide',
  templateUrl: './now-playing-carousel-slide.component.html',
  styleUrls: ['./now-playing-carousel-slide.component.sass'],
})
export class NowPlayingCarouselSlideComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() active!: string;
  // Inyección de dependencias
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  // Seteo de película seleccionada
  selectMovie() {
    this.store.dispatch(MovieActions.setSelectedMovie({ movie: this.movie }));
  }
}
