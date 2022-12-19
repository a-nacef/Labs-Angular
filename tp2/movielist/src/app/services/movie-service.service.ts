import { Injectable } from '@angular/core';
import {MovieListComponent} from '../movie-list/movie-list.component';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import { Movie } from 'src/models/movie';
import { movie_json } from 'src/models/movie-json';


@Injectable({
  providedIn: 'root'
})

export class MovieService{

  // Define a private property to hold all movies, get list movies from movie list component
    private movies = movie_json;
    public list_movies = Array<Movie>();    


    ngOnInit(): void {
       for (let mv of this.movies){
            this.list_movies.push( new Movie(mv) );
        }
  }

  updateMovie(mv: Movie) {
      for (let mov of this.list_movies){
          if (mov.id == mv.id)
              mov = mv;
      }
  }

  getMovieTrailer(id: number) {
    return this.list_movies.filter(x => x.id==id)[0].trailer;  // find the movie with the given id
  }

  getMovieById(id: number) {
    return this.list_movies.filter(x => x.id==id)[0];  // find the movie with the given id
  }
    public getMovies(): Movie[] {
    return this.list_movies;
  }
  // Define a method to get unique list of movie genres
  getMovieGenreList(): string[][] {
    let genres = this.list_movies.map(m => m.genre); // get all genres
    let uniqueGenres = genres.filter((v, i, a) => a.indexOf(v) === i); // get unique genres
    return uniqueGenres;
  }
  constructor() { 
           for (let mv of this.movies){
            this.list_movies.push( new Movie(mv) );
    
        }
  }
}
