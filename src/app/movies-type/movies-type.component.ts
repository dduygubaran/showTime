import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../service/movie-api.service';

@Component({
  selector: 'app-movies-type',
  templateUrl: './movies-type.component.html',
  styleUrls: ['./movies-type.component.css'],
})
export class MoviesTypeComponent implements OnInit {

  constructor(private service: MovieApiService) {}

  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scificMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie()
    this.sciFicMovie();
    this. thrillerMovie();

  }

  //action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((data) => {
      console.log(data, 'action#');
      this.actionMovieResult = data.results;
    });
  }

  //adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((data) => {
      console.log(data, 'adventure#');
      this.adventureMovieResult = data.results;
    })
  }

  //animation
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((data) => {
      console.log(data, 'animatione#');
      this.animationMovieResult = data.results;
    })
  }

  //comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((data) => {
      this.comedyMovieResult = data.results;
    })
  }

  //documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((data) => {
      this.documentaryMovieResult = data.results;
    })
  }

  //sciencfiction
  sciFicMovie() {
    this.service.fetchScienceFictionMovies().subscribe((data) => {
      this.scificMovieResult = data.results;
    })
  }

  //thriller
  thrillerMovie() {
    this.service.fetchSThrillerMovies().subscribe((data) => {
      this.thrillerMovieResult = data.results;
    })
  }

}
