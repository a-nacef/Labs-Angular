import { Component, ElementRef } from '@angular/core';
import { Movie } from 'src/models/movie';
import { movie_json } from 'src/models/movie-json';
import { OnInit } from '@angular/core';
import { MovieGenrePipe } from 'src/models/movie-genre.pipe';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements  OnInit {

    private movies = movie_json;
    public list_movies = Array<Movie>();    


    ngOnInit(): void {
       for (let mv of this.movies){
            this.list_movies.push(  new Movie(mv) );
        }
  }


  constructor(private router: Router) {}

  onClick(event: any ) {
    let title =  String(event.srcElement.innerHTML).trim();
    console.log(title)
    for (let j of movie_json){
      if (j.Title ==  title )
          this.router.navigate( ['movie-details', j.Id]);
    }
}

}
