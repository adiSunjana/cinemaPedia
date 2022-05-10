import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  public isFooter : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isHeader : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }

}
