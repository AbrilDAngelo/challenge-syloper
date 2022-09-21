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
  // Inyección de dependencias
  constructor(private http: HttpClient) {}

  // Callback para setear api_key & language queries
  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es`;
    return this.http.get<T>(query);
  }

  // Peticiones
  getNowPlayingMovies() {
    // Query trivial '?a=1' evita que el primer param inicie con '&' al concatenar
    return this.executeQuery<ResponseTMDB>(`/movie/now_playing?a=1`);
  }
  getPopularMovies() {
    return this.executeQuery<ResponseTMDB>(`/movie/popular?a=1`);
  }
  getMovieById(id: number) {
    return this.executeQuery<MovieDetails>(`/movie/${id}?a=1`);
  }
  getMovieCredits(id: number) {
    return this.executeQuery<Credits>(`/movie/${id}/credits?a=1`);
  }
  searchMovies(query: string) {
    return this.executeQuery<ResponseTMDB>(`/search/movie?query=${query}`);
  }
}
