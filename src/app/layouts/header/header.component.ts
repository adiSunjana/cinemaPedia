import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public arrOpen : boolean = false;
  public menus : Array<any> = [
    { name : 'Home' , label : 'home' },
    { name : 'News' , label : 'news' },
    { name : 'About' , label : 'about' },
    { name : 'FAQ' , label : 'faq' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
