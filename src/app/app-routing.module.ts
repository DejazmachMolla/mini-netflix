import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'favorites',
    component: FavoriteListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: '',
    redirectTo: '/movies', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
