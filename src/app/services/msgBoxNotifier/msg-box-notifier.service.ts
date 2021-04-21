import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MsgBoxNotifierService {

  constructor() { }

  // Observable string sources
  private userDetailsSource = new Subject<string>();

  // Observable string streams
  userDetails$ = this.userDetailsSource.asObservable();

  // Service message commands
  msgBoxClicked(user) {
    this.userDetailsSource.next(user);
  }
}
