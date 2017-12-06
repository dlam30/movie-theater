import { Injectable } from '@angular/core';
import { ShowDateTime } from './showdatetime';
import { SHOWDATETIMES } from './mock-showdatetime';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ShowtimeService {

    getShowtimeId(date: string, time: string): Observable<any> {
        for (let showtime of SHOWDATETIMES) {
            if (showtime.date === date && showtime.time.indexOf(time) >= 0) {
                return of(showtime.id);
            }
        }
    }

    getShowtime(id: number): Observable<ShowDateTime> {
        for (let showtime of SHOWDATETIMES) {
            if (showtime.id === id)
            return of(showtime);
        }
    }

    log(d: string, t : string): void {
        console.log(d, t);
    }

    constructor() { }

}
