import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';
import { ShowDateTime } from '../showdatetime';
import { MovieService } from '../movie.service';
import { ShowtimeService } from '../showtime.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

    movie: Movie;
    time: string;
    showtime: ShowDateTime;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private movieService: MovieService,
        private showtimeService: ShowtimeService
    ) { }

    ngOnInit() {
        this.getMovie();
        this.getShowtime();
        this.route.params.subscribe(params => this.time = params['time']);
    }

    getMovie(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.movieService.getMovie(id)
            .subscribe(movie => this.movie = movie);
    }

    getShowtime(): void {
        const id = +this.route.snapshot.paramMap.get('showtimeId');
        this.showtimeService.getShowtime(id)
            .subscribe(showtime => this.showtime = showtime);
    }

}
