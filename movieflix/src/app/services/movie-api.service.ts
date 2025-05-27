import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3'
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWNlZjdkNjQ1YTY3YzAxNGY5MzA0NDNiN2QyMjk3ZSIsIm5iZiI6MTc0NzY5OTcyMS4xMiwic3ViIjoiNjgyYmM4MDkyOTYxMDBmZmRlNjQ5MDQxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.50fJlUpOwcXGzus_UWd_oV0LvwlDkPfkTF3P6IBSFf0'
    }
  };

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options);
  }

  trendingSerieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options);
  }

  popularActionMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28&sort_by=popularity.desc`, this.options);
  }
}
