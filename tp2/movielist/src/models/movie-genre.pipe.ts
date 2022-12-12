import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';


@Pipe({
  name: 'movieGenre'
})

export class MovieGenrePipe implements PipeTransform {
  transform(movie: Movie): string[] {
    return movie.genre;
  }
}