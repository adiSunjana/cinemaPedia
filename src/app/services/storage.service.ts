import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  stringify(data : any)
  {
    return JSON.stringify(data)
  }

  parse(data : any)
  {
    return JSON.parse(data)
  }

  popularMovies( data : any )
  {
    localStorage.setItem( 'popularMovies' , this.stringify(data) ) 
  }

  getPopularMovies()
  {
    return this.parse(localStorage.getItem('popularMovies'))
  }

}
