import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})

//TODO:CREATE A WELCOME PAGE
export class WelcomePageComponent implements OnInit {

  isShowLogin: boolean = false;

  constructor(private window: Window) {
    window.addEventListener('click', (e) => {
      if(e.target.className === 'modal') this.showHideLoginForm();
    });
  }

  ngOnInit(): void {
  }

  showHideLoginForm(mode:string='hide'): void{
    this.isShowLogin = mode === 'hide' ? false : true;
  }

}
