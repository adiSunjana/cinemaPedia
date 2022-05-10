import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{

  private readonly unsubs : Subject<void> = new Subject<void>() 
  constructor( private home : HomeService ) { }

  ngOnInit(): void {
    this.getMoviePopular()
  }

  getMoviePopular()
  {
    this.home.popularMovie()
              .pipe(
                takeUntil(this.unsubs)
              )
              .subscribe(
                ( res : any ) => {
                  console.log(res)
                },
                err => {
                  console.log(err)
                }
              )
  }


  ngOnDestroy(): void {
    this.unsubs.next()
    this.unsubs.complete()
    this.unsubs.unsubscribe()
  }

}
