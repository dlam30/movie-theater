import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShowDateTime } from '../showdatetime';
import { SHOWDATETIMES } from '../mock-showdatetime';
import { ShowtimeService } from '../showtime.service';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {

    showtimes = SHOWDATETIMES;
    id: number;
    showtimeId: number;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private showtimeService: ShowtimeService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    get(date: string, time: string): void {
        this.showtimeService.log(date, time);
    }

    getShowtimeId(date: string, time: string): void {
        this.showtimeService.getShowtimeId(date, time)
            .subscribe(showtimeId => this.showtimeId = showtimeId);
    }
}
