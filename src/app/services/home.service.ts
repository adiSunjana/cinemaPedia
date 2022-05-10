import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private api : ApiService ) { }

  popularMovie() : Observable<any>
  {
    return this.api.getData('MostPopularMovies') as Observable<any>
  }
  
}
