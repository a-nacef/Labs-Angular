import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/models/movie';
import { movie_json } from 'src/models/movie-json';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
    constructor(private route: ActivatedRoute){
      
    }
    id: number = 0;
    movie: any;
     ngOnInit () {
        this.route.params.subscribe(params => {
        this.id = params["id"];
        this.movie = new Movie(movie_json.filter((mv)  => mv.Id==this.id )[0])
  });
    }
}
