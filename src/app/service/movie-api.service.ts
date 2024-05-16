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

  movieDetailsApiData(data:any): Observable<any> {
    return this.http.get(this.baseUrl + `/movie/${data}?api_key=${this.apiKey}`);
  }

  movieVideoApiData(data:any): Observable<any> {
    return this.http.get(this.baseUrl + `/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  movieCastApiData(data:any): Observable<any> {
    return this.http.get(this.baseUrl+ `/movie/${data}/credits?api_key=${this.apiKey}`)
  }

  // Action
  fetchActionMovies(): Observable<any> {
    return this.http.get(this.baseUrl + `/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }

  // Adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(this.baseUrl + `/discover/movie?api_key=${this.apiKey}&with_genres=12`)
  }

  // Animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(this.baseUrl + `/discover/movie?api_key=${this.apiKey}&with_genres=16`)
  }

  // Comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(this.baseUrl + `/discover/movie?api_key=${this.apiKey}&with_genres=35`)
  }

  // Documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(this.baseUrl + `/discover/movie?api_key=${this.apiKey}&with_genres=99`)
  }

  //Science-Fiction
  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(this.baseUrl + `/discover/movie?api_key=${this.apiKey}&with_genres=878`)
  }

  //Thriller
  fetchSThrillerMovies(): Observable<any> {
    return this.http.get(this.baseUrl + `/discover/movie?api_key=${this.apiKey}&with_genres=53`)
  }
}
