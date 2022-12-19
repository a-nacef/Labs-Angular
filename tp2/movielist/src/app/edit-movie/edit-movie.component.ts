import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie-service.service';
import { Inject } from '@angular/core';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {
  constructor(private route: ActivatedRoute, @Inject(MovieService) private ms: MovieService ) { }

    id: number = 0;
    movie: any;
     ngOnInit () {
        this.route.params.subscribe(params => {
        this.id = params["id"];
        this.movie= this.ms.getMovieById(this.id);
  });

     }
    }
