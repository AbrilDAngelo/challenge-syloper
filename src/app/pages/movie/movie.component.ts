import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';
import { Observable } from 'rxjs';
import { Cast, Movie } from 'src/app/interfaces/tmdb.interface';
import { selectedMovieSelector } from '../../store/movies.selectors';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/tmdb.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass'],
})
export class MovieComponent implements OnInit {
  selectedMovie$: Observable<Movie | null>;
  movieDetails!: MovieDetails;
  cast!: Cast[];
  movieId: number | undefined;
  constructor(
    private store: Store<AppState>,
    private moviesService: MoviesService,
    private location: Location
  ) {
    this.selectedMovie$ = this.store.pipe(select(selectedMovieSelector));
  }

  ngOnInit(): void {
    this.selectedMovie$.subscribe((res) => (this.movieId = res?.id));
    if (this.movieId !== undefined) {
      this.moviesService.getMovieById(this.movieId).subscribe((res) => {
        this.movieDetails = res;
        console.log(this.movieDetails);
      });
    } else {
      return;
    }
    this.selectedMovie$.subscribe((res) => (this.movieId = res?.id));
    if (this.movieId !== undefined) {
      this.moviesService.getMovieCredits(this.movieId).subscribe((res) => {
        this.cast = res.cast.slice(0,6);
        console.log(this.movieDetails);
      });
    } else {
      return;
    }
  }

  goBack() {
    this.location.back();
  }
}
