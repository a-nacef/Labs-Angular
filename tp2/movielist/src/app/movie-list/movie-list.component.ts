import { Component, ElementRef, Inject } from '@angular/core';
import { Movie } from 'src/models/movie';
import { movie_json } from 'src/models/movie-json';
import { OnInit } from '@angular/core';
import { MovieGenrePipe } from 'src/models/movie-genre.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MovieService } from '../services/movie-service.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements  OnInit {

    public list_movies = this.ms.getMovies();
 
    
  ngOnInit(): void {}
  // Define a constructor with an injected MovieService and a private router
  constructor(private router: Router, @Inject(MovieService) private ms: MovieService) { }
    
  onClick(event: any ) {

    let title =  String(event.srcElement.innerHTML).trim();
    console.log(this.list_movies)
    for (let j of movie_json){
      if (j.Title ==  title )
          this.router.navigate( ['movie-details', j.Id]);
    }
}

}



