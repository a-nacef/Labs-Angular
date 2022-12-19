import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie-service.service';



@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css']
})
export class MovieTrailerComponent {

  constructor(private route: ActivatedRoute, @Inject(MovieService) private ms: MovieService )
      {}

      id: number = 0;
      vid_id: string = '';
    movie: any;
     ngOnInit () {
        this.route.params.subscribe(params => {
        this.id = params["id"];
        this.movie= this.ms.getMovieById(this.id);
        this.vid_id = this.movie.trailer;
  });
     }
}
