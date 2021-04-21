import { Component, OnInit, Input } from '@angular/core';
import {io} from 'socket.io-client';
import {AccountService} from '../../services/account/account.service';

const SOCKET_ENDPOINT = 'localhost:4000/';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  
  @Input() chatBoxDetails: any;
  socket;
  msgs: any = [];
  msg: any = {
    from: '',
    to: '',
    content: ''
  };
  whoIsTypingStr: String = '';

  constructor(private accountService:AccountService) {
  }

  ngOnInit(): void {
    this.setupSocketConnection();
    this.socket.on('send private msg', (msg) => {
      this.msgs.push(msg);
    });
    this.socket.on('send who is typing', (str) => {
      this.whoIsTypingStr = str;
    });
    this.socket.on('send empthy str', (str) => {
      this.whoIsTypingStr = str;
    });
  }

  setupSocketConnection() {
    const {loggedUserId} = this.accountService;
    this.socket = io(SOCKET_ENDPOINT, {
      query: {loggedUserId}
    });
  }

  sendPrivateMsg(){
    const {_id} = this.chatBoxDetails;
    const {loggedUserName} = this.accountService;
    const {name} = this.chatBoxDetails.aboutUser

    this.msg.from = loggedUserName;
    this.msg.to = name;
    this.socket.emit('private message', _id, this.msg);
    this.msg.content = '';
    this.whoIsTypingStr = '';
    this.socket.emit('user stopped typing');
  }

  onUserTyping(){
    console.log('here')
    const {loggedUserName} = this.accountService;
    this.socket.emit('user is typing', loggedUserName);
  }

}
