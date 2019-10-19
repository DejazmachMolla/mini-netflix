import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  pageSize : number = 20;
  pageIndex : number = 0;
  orderBy : string;
  searchTextVal;
  pageSizeOptions : number[] = [20];
  start = 0;
  
  loading : boolean = false;
  data : any;
  fetchError : boolean = false;
  length : number;
  //Progress spinner
  color = 'primary';
  mode = 'determinate';
  value = 30;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
  this.loading = true;
  this.data = null;
  this.movieService.getAllMovies(this.searchTextVal, this.start+1).subscribe(response =>{
    
    this.data = response;
    this.length = response.total_results;
    this.fetchError = false;
    this.loading = false;
  }, err => {
    this.loading = false;
    this.fetchError = true;
  }, () => {
    this.loading = false;

  })
}
onPage(event) {
  this.start = event.pageIndex;
  this.getAllMovies();
}
}
