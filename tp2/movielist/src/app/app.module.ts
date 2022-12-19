import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Movie } from 'src/models/movie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieGenrePipe } from 'src/models/movie-genre.pipe';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    EditMovieComponent,
    MovieGenrePipe,
    MovieTrailerComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, MovieListComponent, MovieDetailsComponent,  EditMovieComponent, MovieGenrePipe, MovieTrailerComponent]
})




export class AppModule { }
