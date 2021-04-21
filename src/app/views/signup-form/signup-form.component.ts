import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from "../../services/account/account.service"
import { LocalstorageService } from "../../services/localstorage/localstorage.service"

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

//TODO: IMPLAMENT ASYNCH FORM VALIDATORS
//TODO: CREATE AN ERROR COMPONENT FOR FORMS
export class SignupFormComponent implements OnInit {
  signupForm;
  imgs = [];

  constructor(
    private router: Router,
    private accountService: AccountService,
    private localstorageService:LocalstorageService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      age: [1, Validators.min(18)],
      name: ['', Validators.required],
      aboutYou: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addImgUrl(file_url) {    
    this.imgs.push(file_url);
  }

  onSubmit() {
    const { value: formData } = this.signupForm
    formData.imgs = this.imgs
    this.accountService.doLoginOrSignup(formData, 'Signup')
    .subscribe(({data: {signup}}:any) => {
      if(signup.status) return
      this.accountService.loggedUser = signup
      this.localstorageService.setItem('loggedUser', signup)
      this.router.navigate(['/doubletake']);
    })
  }
}
