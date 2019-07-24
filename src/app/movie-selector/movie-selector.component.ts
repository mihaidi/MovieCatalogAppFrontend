import { MovieService } from './../shared/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms'
import { Observable } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
  styleUrls: ['./movie-selector.component.css'],
  providers: [NgbCarouselConfig]
})
export class MovieSelectorComponent implements OnInit {

  pageNr: number = 1;
  filteredMovies: Array<any>;
  showNavigationArrows = true;
  selectedGenders: Array<number> = [];
  form: FormGroup;
  allGenres: Array<any> = [];




  ngOnInit() {
    this.getMovieGenres();
  }



  constructor(private service: MovieService,
    config: NgbCarouselConfig) {
    config.interval = 0;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }



  private getMovieByGenres() {
    this.service.getFilteredByGenresMovies(this.pageNr, this.selectedGenders).subscribe(data => {
      this.filteredMovies = data.results;
      console.log(this.filteredMovies);
    }
    );
  }

  private getMovieGenres() {
    this.service.getMovieGenres().subscribe(data => {

      this.allGenres = data.genres;
      // console.log(this.allGenres);
    });

  }


  onSelectGenre(id: number, isChecked: boolean) {
    if (isChecked) {
      this.selectedGenders.push(id);
    } else {
      let index = this.selectedGenders.indexOf(id);
      this.selectedGenders.splice(index, 1);
    }
    this.getMovieByGenres();
    console.log(this.selectedGenders)
  }

}
