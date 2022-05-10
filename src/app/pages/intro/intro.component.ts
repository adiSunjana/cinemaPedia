import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutsService } from 'src/app/services/layouts.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit , OnDestroy {

  constructor( private layoutsService : LayoutsService ) {}

  ngOnInit(): void {}
  

  ngOnDestroy(): void {
    this.layoutsService.isFooter.next(true)
    this.layoutsService.isHeader.next(true)
  }

}
