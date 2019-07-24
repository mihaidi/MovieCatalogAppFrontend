import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie/movie.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private movieService: MovieService) { }
 



  ngOnInit() {
  }



}
