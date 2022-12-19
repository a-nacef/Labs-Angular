import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/models/movie';
import { movie_json } from 'src/models/movie-json';
import  { MovieService } from '../services/movie-service.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private route: ActivatedRoute, @Inject(MovieService) private ms: MovieService) { }
    private movie_json  = this.ms.getMovies();
    id: number = 0;
    movie: any;
     ngOnInit () {
        this.route.params.subscribe(params => {
        this.id = params["id"];
        this.movie= this.ms.getMovieById(this.id);
  });

  





    }
}
