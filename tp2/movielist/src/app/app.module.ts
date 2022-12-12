import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieGenrePipe } from 'src/models/movie-genre.pipe';
import { Movie } from 'src/models/movie';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieGenrePipe,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, MovieListComponent, MovieDetailsComponent]
})
export class AppModule { }
