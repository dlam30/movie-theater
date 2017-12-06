import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ShowtimeComponent } from './showtime/showtime.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
    { path: 'showtime/:id', component: ShowtimeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'detail/:id', component: MovieDetailComponent },
    { path: 'purchase/:id/:showtimeId/:time', component: PurchaseComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', redirectTo: '/movies', pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
