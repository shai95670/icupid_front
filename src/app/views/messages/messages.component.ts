import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { MsgBoxNotifierService } from '../../services/msgBoxNotifier/msg-box-notifier.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  providers: [MsgBoxNotifierService]
})

//TODO: CREATE MESSAGE LIST AND MESSAGE CARD
export class MessagesComponent implements OnInit {
  
  // details for the chat box
  clickedMsgBoxDetails: any;
  subscription: Subscription;


  constructor(
    public accountService:AccountService,
    private msgBoxNotifierService: MsgBoxNotifierService
  ) {
    this.subscription = msgBoxNotifierService.userDetails$.subscribe(
      userDetails => {
        console.log(userDetails)
        this.clickedMsgBoxDetails = userDetails;
    });
  }

  ngOnInit(): void {
  }
}
