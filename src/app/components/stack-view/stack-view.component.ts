import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stack-view',
  templateUrl: './stack-view.component.html',
  styleUrls: ['./stack-view.component.scss']
})
export class StackViewComponent implements OnInit {

  @Input() match;
  @Output() doPassOrLikeRequest = new EventEmitter<string>();

  constructor() {}

  ngOnChanges() {
  }

  ngOnInit(): void {
    console.log(this.match)
  }

  doPassOrLike(action): void {
    this.doPassOrLikeRequest.emit(action);
  }

  generateImgObjArr():Array<object>{
    return this.match.pictures.map((url) => {
      return {thumbImage: url}
    })
  }
}
