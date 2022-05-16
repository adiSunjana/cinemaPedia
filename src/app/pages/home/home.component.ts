import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{

  private readonly unsubs : Subject<void> = new Subject<void>() 
  private isReady : boolean = false;
  private limit : number = 5;

  public data : {}[] = []
  public allData : {}[] = []

  constructor( private home : HomeService ,
               private storage : StorageService ) { }

  async ngOnInit() {
    await this.checkLocalStorage()
    if(!this.isReady){
      await this.getMoviePopular();
    }else{
      if(this.allData.length > 0){
        this.data = this.allData.slice( 0 , this.limit )
      }
    }
  }

  async getMoviePopular()
  {
    await this.home.popularMovie()
              .pipe(
                takeUntil(this.unsubs)
              )
              .subscribe(
                ( res : any ) => {
                  if(res.errorMessage == ''){
                    this.allData = res?.items
                    this.storage.popularMovies(this.allData)
                  }
                },
                err => {
                  console.log(err)
                }
              )
  }

  async checkLocalStorage()
  {
    let data = await this.storage.getPopularMovies()
    if(data.length > 0){
      this.allData = data;
      this.isReady = true;
    }
  }


  ngOnDestroy(): void {
    this.unsubs.next()
    this.unsubs.complete()
    this.unsubs.unsubscribe()
  }

}
