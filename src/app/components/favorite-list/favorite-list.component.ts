import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  data : any;
  fetchError : boolean = false;
  length : number;
  storedFavs;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    let favContainer = sessionStorage.getItem('favContainer');
    if(favContainer) {
      this.storedFavs = JSON.parse(favContainer);
    }
    
  }

}
