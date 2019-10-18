import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id;
  movie;
  basePosterPath = 'https://image.tmdb.org/t/p/w500';
  constructor(private router : Router, private route : ActivatedRoute, private movieService : MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log('the id is '+this.id)
      this.movieService.getSingleMovie(this.id).subscribe(response => {
        this.movie = response;
      })
    })
  }
  getPoster() {
    return this.basePosterPath+this.movie.poster_path; 
  }

}
