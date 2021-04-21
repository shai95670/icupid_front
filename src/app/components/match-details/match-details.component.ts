import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  @Input() aboutUser;

  constructor() { }

  ngOnInit(): void {
  }

}
