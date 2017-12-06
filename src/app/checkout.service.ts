import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Ticket } from './ticket';
import { TICKETS } from './mock-ticket';

@Injectable()
export class CheckoutService {

    map: string[];
    value: number;
    tickets: Ticket[];
    date: string;
    time: string;
    movie: string;

    updateValue(value: number): void {
        this.value = value;
    }

    getValue(): Observable<any> {
        return of(this.value);
    }

    updateDetails(date: string, time: string, movie: string) {
        this.date = date;
        this.time = time;
        this.movie = movie;
        console.log(this.date + " " + this.time + " " + this.movie);
    }

    clear(): void {
        this.date = "";
        this.time = "";
        this.movie = "";
    }

    getDate(): Observable<any> {
        return of(this.date);
    }

    getTime(): Observable<any> {
        return of(this.time);
    }

    getMovie(): Observable<any> {
        return of(this.movie);
    }

    reset(): void {
        this.value = 0;
    }

    resetTickets(): void {
        this.tickets = [];
    }

    generateTicketCode(id: number, value: number): void {
        let code = this.map[id - 1];
        for (let i = 0; i < value; i++) {
            let ticket = TICKETS[i];
            this.tickets.push(new Ticket(id, code + ticket.code));
        }
    }

    retrieveTickets(): Observable<Ticket[]> {
        return of(this.tickets);
    }

    log(tickets: Ticket[]): void {
        for (let ticket of tickets)
            console.log(ticket.code);
    }

    constructor() {
        this.map = [
            "CC", "JL", "TR", "TS", "JS", "NV", "LB", "BR"
        ]
        this.tickets = [];
        this.clear();
    }

}
