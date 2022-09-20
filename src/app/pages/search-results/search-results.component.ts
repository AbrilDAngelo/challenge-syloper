import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/tmdb.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass'],
})
export class SearchResultsComponent implements OnInit {
  searchQuery = 'Iron Man';
  searchResults: Movie[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.searchMovies(this.searchQuery).subscribe((res) => {
      this.searchResults = res.results.slice(0, 8);
    });
  }
}
