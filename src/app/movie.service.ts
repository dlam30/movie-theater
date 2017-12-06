import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MovieService {

    movies: Movie[];

    getMovies(): Movie[] {
        return MOVIES;
    }

    getMovie(id: number): Observable<Movie> {
        for (let movie of MOVIES) {
            if (movie.id === id)
                return of(movie);
        }
    }

    constructor() { }

}
