import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    tickets: Ticket[];
    date: string;
    time: string;
    movie: string;

    constructor(
        private checkoutService: CheckoutService
    ) { }

    ngOnInit() {
        this.checkoutService.retrieveTickets()
            .subscribe(tickets => {
                this.tickets = tickets;
                this.checkoutService.resetTickets();
            });
        this.checkoutService.getTime().subscribe(time => this.time = time);
        this.checkoutService.getDate().subscribe(date => this.date = date);
        this.checkoutService.getMovie().subscribe(movie => this.movie = movie);
        this.checkoutService.clear();
    }

}
