import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  basePosterPath = 'https://image.tmdb.org/t/p/w500';
  baseSearchApiPath = 'https://api.themoviedb.org/3/search/movie?api_key=46171315a095ae020e6f2188b918486d';
  allMoviePath = 'https://api.themoviedb.org/3/movie/now_playing?api_key=46171315a095ae020e6f2188b918486d';
  singleMoviePath = 'https://api.themoviedb.org/3/movie/';
  constructor(private httpClient: HttpClient) {}
  
  getAllMovies(searchText:string, page:number) : Observable<any> {
    if(searchText && searchText.trim()) {
      return this.httpClient.get<any>(this.baseSearchApiPath+'&query='+searchText+'&page='+page);
      
    }
    return this.httpClient.get<any>(this.allMoviePath+'&page='+page);
    
  }

  getSingleMovie(id) :Observable<any>{
    return this.httpClient.get<any>(this.singleMoviePath+id+'?api_key=46171315a095ae020e6f2188b918486d');
  }
}
