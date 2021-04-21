import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import cloudinaryConfiguration from './config';
import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { WebSocketLink } from '@apollo/client/link/ws';
import { NgImageSliderModule } from 'ng-image-slider';
import {
  split
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { InMemoryCache } from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';













// components
import { AppComponent } from './app.component';
import { DoubleTakeComponent } from './views/double-take/double-take.component';
import { DoubleTakeNavComponent } from './components/double-take-nav/double-take-nav.component';
import { StackMenueComponent } from './components/stack-menue/stack-menue.component';
import { StackViewComponent } from './components/stack-view/stack-view.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { SignupFormComponent } from './views/signup-form/signup-form.component';
import { SigninFormComponent } from './views/signin-form/signin-form.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { LikesComponent } from './views/likes/likes.component';
import { LikeNavComponent } from './components/like-nav/like-nav.component';
import { LikeCardListComponent } from './components/like-card-list/like-card-list.component';
import { LikeCardComponent } from './components/like-card/like-card.component';
import { MessagesComponent } from './views/messages/messages.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { ChatComponent } from './components/chat/chat.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DoubleTakeComponent,
    DoubleTakeNavComponent,
    StackMenueComponent,
    StackViewComponent,
    MatchDetailsComponent,
    WelcomePageComponent,
    SignupFormComponent,
    SigninFormComponent,
    PhotoUploadComponent,
    LikesComponent,
    LikeNavComponent,
    LikeCardListComponent,
    LikeCardComponent,
    MessagesComponent,
    MessagesListComponent,
    MessageCardComponent,
    ChatComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfiguration),
    NgImageSliderModule,
  ],
  providers: [
    { 
      provide: Window,
      useValue: window
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:4000/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
