import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-single-favorite-movie',
  templateUrl: './single-favorite-movie.component.html',
  styleUrls: ['./single-favorite-movie.component.css']
})
export class SingleFavoriteMovieComponent implements OnInit {
  @Input() movieId;
  basePosterPath = 'https://image.tmdb.org/t/p/w500';
  
  movie;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movieService.getSingleMovie(this.movieId).subscribe(response => {
      this.movie = response;
    })
  }

  getPoster() {
    return this.basePosterPath+this.movie.poster_path; 
  }

}
