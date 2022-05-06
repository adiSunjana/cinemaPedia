import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, Observable, observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers = new HttpHeaders()
                        .set('Content-type' , 'aplication/json; charset=utf-8')
                        .set('Accept' , 'aplication/json')
  private apiUrl = environment.API_URL
  private apiKey = environment.API_KEY

  constructor( private router : Router ,
               private httpClient : HttpClient ) {}

  
  public getData(param : string) : Observable<any>
  {
    return this.httpClient.get<any>(`${this.apiUrl+param}/${this.apiKey}`)
        .pipe(catchError(this.errorHandler.bind(this))) as Observable<any>
  }

  private errorHandler(error : HttpErrorResponse)
  {
    this.router.navigate(['/error'])
    return throwError(error.message || 'Data Not Found')
  }

}
