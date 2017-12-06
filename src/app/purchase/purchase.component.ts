import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';
import { ShowDateTime } from '../showdatetime';
import { MovieService } from '../movie.service';
import { ShowtimeService } from '../showtime.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

    movie: Movie;
    time: string;
    showtime: ShowDateTime;
    showtimeId: number;
    id: number;
    value: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private movieService: MovieService,
        private showtimeService: ShowtimeService,
        private checkoutService: CheckoutService
    ) { }

    ngOnInit() {
        this.getMovie();
        this.getShowtime();
        this.route.params.subscribe(params => this.time = params['time']);
        this.route.params.subscribe(params => this.showtimeId = params['showtimeId']);
        this.route.params.subscribe(params => this.id = params['id']);
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



    goBack(): void {
        this.location.back();
    }

    getValue(value: number): void {
        this.value = value;
    }

    checkout(): void {
        this.checkoutService.getValue()
            .subscribe(value => {
                if (value === 0)
                    alert("Please add tickets");
                else {
                    this.router.navigate(['/checkout']);
                    this.checkoutService.generateTicketCode(this.id, value);
                    this.checkoutService.reset();
                    this.checkoutService.updateDetails(this.showtime.date, this.time, this.movie.name);
                }
            });
    }
}
