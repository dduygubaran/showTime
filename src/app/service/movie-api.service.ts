import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService{

  constructor(private http: HttpClient) {}

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "08cc33bd5ae3a747598ce2ad84376e66";

  bannerApiData(): Observable<any> {
    return this.http.get(this.baseUrl + `/trending/all/week?api_key=${this.apiKey}`);
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(this.baseUrl + `/trending/movie/day?api_key=${this.apiKey}`);
  }

  searchApiData(data:any): Observable<any> {
    return this.http.get(this.baseUrl+ `/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

}
