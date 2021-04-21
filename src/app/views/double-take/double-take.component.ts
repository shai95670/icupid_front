import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from "../../services/account/account.service"
import { UserService } from "../../services/user/user.service"
import { LocalstorageService } from "../../services/localstorage/localstorage.service"


@Component({
  selector: 'app-double-take',
  templateUrl: './double-take.component.html',
  styleUrls: ['./double-take.component.scss']
})

export class DoubleTakeComponent implements OnInit {

  users:any = [];
  stackName: string = 'All';
  isShowMatchBanner: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private localStorageService:LocalstorageService,
    public accountService: AccountService,
  ) {}

  ngOnInit(): void {
    // check if user is logged in, if not route to login
    if(!this.accountService.loggedUser) {
      this.router.navigate(['/home']);
      return;
    }
    this.filterUsers(this.stackName);
  }

  doPassOrLike(action): void {
    const currStackUserId = this.getCurrUser()._id
    const loggedUserId = this.accountService.loggedUserId

    if(action === 'pass') {
      this.deleteUser(currStackUserId)
      return 
    } 
    // depending on the action, do something
    // like - add the specific logged in user to the other users likes array in the backend
    // pass - only pop the user and do not send a request to the server
    //TODO: IF WE GET A MATCHED STATUS BACK, SHOW A BANNER WITH BOTH PEOPLE MATCHED
    this.userService.doLikeOrPass(loggedUserId, currStackUserId)
    .subscribe(({data: {doLikeOrPass}}:any) => {
      if(doLikeOrPass.status) return;
      const { user:updatedUser } = doLikeOrPass
      this.accountService.loggedUser = updatedUser
      this.localStorageService.setItem('loggedUser', updatedUser)
    },(error) => {
      console.log('there was an error sending the query', error);
    });
    this.deleteUser(currStackUserId)
  }

  getCurrUser(){
    return this.users[this.users.length-1]
  }

  getCurrUserDesc(){
    const currUser = this.getCurrUser();
    const { aboutMe } = currUser.aboutUser
    return aboutMe
  }
  
  filterUsers(filterBy): void {
    console.log('worked');
    // get the logged in user, filterBy pass them as an object
    this.userService.getUsers(filterBy, this.accountService.loggedUserCity)
    .valueChanges.subscribe(({data}:any) => {
      this.users = data.users
    });
    this.stackName = filterBy
  }

  deleteUser(id) {
    const copyUsers = [...this.users]
    const index = copyUsers.findIndex(copyUser => copyUser._id === id);
    copyUsers.splice(index, 1);
    this.users = copyUsers
  }
}
