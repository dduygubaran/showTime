import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiService) {}

  bannerResult: any = [];
  trendingResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((data) => {
      console.log(data);
      this.bannerResult = data.results;
    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((data) => {
      console.log(data);
      this.trendingResult = data.results;
    })
  }

}
