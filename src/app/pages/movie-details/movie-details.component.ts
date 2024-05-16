import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private service: MovieApiService,
              private router: ActivatedRoute
    ) {}
    movieDataResult: any = [];
    movieVideoResult: any = [];
    movieCastResult: any = [];

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    this.movieDetails(getParamId);
    this.movieVideo(getParamId);
    this.movieCast(getParamId);
  }

  movieDetails(id: any) {
    this.service.movieDetailsApiData(id).subscribe((data) => {
      console.log(data, 'getmoviedetails#');
      this.movieDataResult = data;
    })
  }

  movieVideo(id:any) {
    this.service.movieVideoApiData(id).subscribe((data) => {
      console.log(data, 'videos#')
      data.results.forEach((element:any) => {
        if(element.type == "Trailer") {
          this.movieVideoResult = element.key;
        }
      });
    })
  }

  movieCast(id:any) {
    this.service.movieCastApiData(id).subscribe((data) => {
      console.log(data,'cast#');
      this.movieCastResult = data.cast;

    })
  }


}
