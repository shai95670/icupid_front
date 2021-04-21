import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stack-menue',
  templateUrl: './stack-menue.component.html',
  styleUrls: ['./stack-menue.component.scss']
})
export class StackMenueComponent implements OnInit {

  @Output() filterUsersRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filterUsers(filterBy): void {
    console.log(filterBy);
    this.filterUsersRequest.emit(filterBy);
  }

}
