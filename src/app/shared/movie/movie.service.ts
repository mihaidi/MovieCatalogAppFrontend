import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class MovieService {

  URL: string = "//localhost:8080/api/";

  constructor(private http: HttpClient) { }

  getAllMoviesByPage(pageNr: number): Observable<any> {
    return this.http.get(this.URL + "popular/" + pageNr);
  }

  getMovieByNameAndPage(pageNr: number, movieName: string): Observable<any> {
    return this.http.get(this.URL + "search/" + movieName + "/" + pageNr);
  }


  getFilteredByGenresMovies(pageNr: number, genresId: Array<number>): Observable<any> {

    //set default value to array if is empty to avoid a error on logs but 28 remain on array is a problem
    if (genresId.length <= 0) {
      genresId.push(28);
    }

    return this.http.get(this.URL + "discover/" + genresId + "/" + pageNr);
  }

  getMovieGenres(): Observable<any> {
    return this.http.get(this.URL + "genres");
  }

}
