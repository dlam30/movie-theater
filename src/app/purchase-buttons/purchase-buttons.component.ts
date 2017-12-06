import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-purchase-buttons',
  templateUrl: './purchase-buttons.component.html',
  styleUrls: ['./purchase-buttons.component.css']
})
export class PurchaseButtonsComponent implements OnInit {

    value: number;

    constructor(
        private checkoutService: CheckoutService
    ) {}

    ngOnInit() {
        this.value = 0;
        this.checkoutService.updateValue(this.value);
    }

    subtract(): void {
        if (this.value > 0) {
            this.value--;
            this.checkoutService.updateValue(this.value);
        }
    }

    add(): void {
        if (this.value >= 20) {
            alert("Sorry, we are out of tickets!");
        } else {
            this.value++;
            this.checkoutService.updateValue(this.value);
        }
    }

}
