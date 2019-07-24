import { MatGridListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './page-content/movie-list.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterComponent } from './footer/footer.component';
import { MovieSelectorComponent } from './movie-selector/movie-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavComponent,
    HomeComponentComponent,
    FooterComponent,
    MovieSelectorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  exports: [MovieSelectorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
