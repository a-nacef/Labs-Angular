import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie } from 'src/models/movie';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
