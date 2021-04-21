import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-card-list',
  templateUrl: './like-card-list.component.html',
  styleUrls: ['./like-card-list.component.scss']
})
export class LikeCardListComponent implements OnInit {

  @Input() likes: any;

  constructor() { }

  ngOnInit(): void {
  }

}
