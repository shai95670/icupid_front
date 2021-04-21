import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from "../../services/account/account.service"
import { LocalstorageService } from "../../services/localstorage/localstorage.service"
import { Output, EventEmitter } from '@angular/core'; // First, import Input


@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  @Output() closeBtnEvent: EventEmitter<any> = new EventEmitter();

  signinForm;
  errorMessage:string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private localstorageService:LocalstorageService
  ) {
    this.signinForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
  }
  
  onSubmit(loginData): void {
    this.accountService.doLoginOrSignup(loginData, 'Login')
    .subscribe(({data: {login}}: any) => {
      if(login.status) {
        this.errorMessage = login.status;
        setTimeout(() => {this.errorMessage = ''}, 3000)
        return
      }
      this.accountService.loggedUser = login
      this.localstorageService.setItem('loggedUser', login)
      this.router.navigate(['/doubletake']);
    })
  }

  onCloseBtnEvent() {
    this.closeBtnEvent.emit();
  }
}
