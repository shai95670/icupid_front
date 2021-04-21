import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MsgBoxNotifierService } from '../../services/msgBoxNotifier/msg-box-notifier.service';


@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {
  
  @Input() userDetails:any;
  constructor(private msgBoxNotifierService: MsgBoxNotifierService) { }

  ngOnInit(): void {
  }
  
  onMsgCardClick() {
   this.msgBoxNotifierService.msgBoxClicked(this.userDetails);
  }

}
