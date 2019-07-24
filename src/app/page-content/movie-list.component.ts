import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie/movie.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  movieName = new FormControl('');
  public movieArray: Array<any>;
  public pageNr: number = 1;

  constructor(private movieService: MovieService,
    config: NgbRatingConfig) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    this.refreshPage();
  }


  nextPage(): void {
    this.pageNr++;
    this.refreshPage();
  }

  previosPage(): void {
    this.pageNr--;
    this.refreshPage();
  }


  refreshPage(): void {

    if (this.movieName.value === '') {

      this.movieService.getAllMoviesByPage(this.pageNr).subscribe(data => {
        this.movieArray = data.results;
        console.log(this.movieArray);
      });
    }
    else {
      this.movieService.getMovieByNameAndPage(this.pageNr, this.movieName.value).subscribe(data => {
        this.movieArray = data.results;
        console.log(this.movieArray);

      });
    }
  }
}