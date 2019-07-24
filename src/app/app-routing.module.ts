import { MovieSelectorComponent } from './movie-selector/movie-selector.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieListComponent } from './page-content/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home',component: HomeComponentComponent},
  {path:'topMovie',component: MovieListComponent},
  {path: 'selector',component: MovieSelectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
