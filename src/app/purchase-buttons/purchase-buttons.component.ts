import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-buttons',
  templateUrl: './purchase-buttons.component.html',
  styleUrls: ['./purchase-buttons.component.css']
})
export class PurchaseButtonsComponent implements OnInit {

    value: number;

    constructor() { }

    ngOnInit() {
        this.value = 0;
    }

    subtract(): void {
        if (this.value > 0)
            this.value--;
    }

    add(): void {
        this.value++;
    }

}
