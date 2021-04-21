import { Component, OnInit } from '@angular/core';
import { AccountService } from "../../services/account/account.service"

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})


export class LikesComponent implements OnInit {

  msg: String = 'They Like You, start chatting with them';
  typeOfLike: String = "Likes You";

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  onChangeLikeType(type) {
    this.typeOfLike = type;
    this.changeMsg();
  }

  changeMsg() {
    this.msg = (this.typeOfLike === "Likes You") ? "They Like You, start chatting with them" : "You Like Them, Send Them a Message with them";
  }

  getLikesByType() {
    const likes = (this.typeOfLike === "Likes You") ? this.accountService.likes : this.accountService.platonicLikes;
    return likes
  }

}
