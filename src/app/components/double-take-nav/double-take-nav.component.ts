import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from "../../services/account/account.service"


@Component({
  selector: 'app-double-take-nav',
  templateUrl: './double-take-nav.component.html',
  styleUrls: ['./double-take-nav.component.scss']
})
export class DoubleTakeNavComponent implements OnInit {
  @Input() loggedUserName;
  
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
  }
}
