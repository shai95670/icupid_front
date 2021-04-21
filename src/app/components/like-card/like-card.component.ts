import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-card',
  templateUrl: './like-card.component.html',
  styleUrls: ['./like-card.component.scss']
})
export class LikeCardComponent implements OnInit {

  @Input() user: any;


  constructor() { }

  ngOnInit(): void {
  }

}
