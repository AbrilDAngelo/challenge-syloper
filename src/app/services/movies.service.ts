import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  Credits,
  MovieDetails,
  ResponseTMDB,
} from '../interfaces/tmdb.interface';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  // Dependency injections
  constructor(private http: HttpClient) {}

  // Callback function for setting api_key & language queries
  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es`;
    return this.http.get<T>(query);
  }

  // Petitions
  getNowPlaying() {
    // Fake query '?a=1' prevents first param from starting with '&'
    return this.executeQuery<ResponseTMDB>(`/movie/now_playing?a=1`);
  }
  getMovieById(id: number) {
    // Fake query '?a=1' prevents first param from starting with '&'
    return this.executeQuery<MovieDetails>(`/movie/${id}?a=1`);
  }
  getMovieCredits(id: number) {
    // Fake query '?a=1' prevents first param from starting with '&'
    return this.executeQuery<Credits>(`/movie/${id}/credits?a=1`);
  }
  searchMovies(query: string) {
    return this.executeQuery<ResponseTMDB>(`/search/movie?query=${query}`);
  }
}
