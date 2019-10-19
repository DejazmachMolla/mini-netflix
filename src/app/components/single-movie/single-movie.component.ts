import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  basePosterPath = 'https://image.tmdb.org/t/p/w500';
  @Input() movie;
  iconType :string = 'favorite_border';
  constructor() { }

  ngOnInit() {
    let favContainer = sessionStorage.getItem('favContainer');
    if(favContainer) {
      //Change it to array
      let storedFavs = JSON.parse(favContainer);
      if(storedFavs.includes(this.movie.id)) {
        this.iconType = 'favorite';
      }
    }
  }

  getPoster() {
    return this.basePosterPath+this.movie.poster_path; 
  }

  favoriteIt() {
    let favContainer = sessionStorage.getItem('favContainer');
    if(favContainer) {
      let storedFavs = JSON.parse(sessionStorage.getItem("favContainer"));
      if(this.iconType === 'favorite_border') {
        storedFavs.push(this.movie.id);
        sessionStorage.clear();

        sessionStorage.setItem('favContainer', JSON.stringify(storedFavs));
        this.iconType = 'favorite';
      } else {
        storedFavs = storedFavs.filter(e => e !== this.movie.id)
        sessionStorage.clear();
        sessionStorage.setItem('favContainer', JSON.stringify(storedFavs));
        this.iconType = 'favorite_border';
      }

    } else {
      let newFavContainer : string[] = new Array();
      newFavContainer.push(this.movie.id);
      sessionStorage.setItem('favContainer', JSON.stringify(newFavContainer));
      this.iconType = 'favorite';
    }
  }
}
