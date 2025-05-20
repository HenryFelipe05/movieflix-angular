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
}
