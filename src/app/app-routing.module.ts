import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoubleTakeComponent } from './views/double-take/double-take.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { SignupFormComponent } from './views/signup-form/signup-form.component';
import { SigninFormComponent } from './views/signin-form/signin-form.component';
import { LikesComponent } from './views/likes/likes.component';
import { MessagesComponent } from './views/messages/messages.component'

const routes: Routes = [
  { path: 'doubletake', component: DoubleTakeComponent },
  { path: 'likes', component: LikesComponent },
  { path: 'home', component: WelcomePageComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'messages', component: MessagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
