import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-like-nav',
  templateUrl: './like-nav.component.html',
  styleUrls: ['./like-nav.component.scss']
})
export class LikeNavComponent implements OnInit {

  @Input() likeCnt: number;
  @Output() changeLikeType: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  signalChangeLikeType(type){
    console.log(type);
    this.changeLikeType.emit(type);
  }

}
