import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';
import { ShowtimeComponent } from './showtime/showtime.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ShowtimeService } from './showtime.service';
import { PurchaseButtonsComponent } from './purchase-buttons/purchase-buttons.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutService } from './checkout.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    ShowtimeComponent,
    PurchaseComponent,
    PurchaseButtonsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ MovieService, ShowtimeService, CheckoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
