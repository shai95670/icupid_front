import { Injectable, Input } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import  { LocalstorageService }  from '../localstorage/localstorage.service'


const LOGIN = gql`
  mutation login($formData: loginFormInput) {
    login(formData: $formData) {
      ... on User {
        _id
        aboutUser {
          name
          age
          aboutMe
          city
          joinedAt
          isOnline
        }
        pictures
        likes {
          _id
          aboutUser {name, age, isOnline, city}
          pictures
        }
        platonicLikes {
          _id
          aboutUser {name, age, isOnline, city}
          pictures
        }
        matches {
          _id
          aboutUser {name, age, isOnline, city}
          pictures
        }
      }
      ... on StatusObject {
        status
      }
    }
  }
`;

const SIGNUP = gql`
  mutation signup($formData: signupFormInput) {
    signup(formData: $formData) {
      _id
      email
      hash
      aboutUser {
        name
        age
        aboutMe
        city
        joinedAt
        isOnline
      }
      pictures
      likes {
        _id
        aboutUser {name, age, isOnline, city}
        pictures
      }
      platonicLikes {
        _id
        aboutUser {name, age, isOnline, city}
        pictures
      }
      matches {
        _id
        aboutUser {name, age, isOnline, city}
        pictures
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})

//TODO: CREATE AN UPDATE USER FUNCTION 
export class AccountService {

  private _loggedUser: any = null;

  constructor(
    private apollo: Apollo,
    private localstorageService: LocalstorageService,
  ) {
    if(this.localstorageService.isInStorage('loggedUser')){
      this._loggedUser = this.localstorageService.getItem('loggedUser')
    }
  }
  
  doLoginOrSignup(formData, action:string){
    if(!this.isValidFormData(formData)) return;
    const mutationType = (action === 'Login') ? LOGIN : SIGNUP;
    return this.apollo.mutate({
      mutation: mutationType,
      variables: {
        formData
      }
    })
  }
  
  // IF A FIELD HAS NO VALUE DO NOT SEND A REQUEST TO THE SERVER
  isValidFormData(formData): boolean {
    let isValid = true
    for(var key in formData) {
      if(formData[key] === "") {
        isValid = false
        break;
      }
    }
    return isValid
  }

  set loggedUser(user){
    this._loggedUser = user
  }

  get loggedUser(){
    return this._loggedUser
  }

  get loggedUserName(){
    return this._loggedUser.aboutUser.name
  }

  get loggedUserCity(){
    return this._loggedUser.aboutUser.city
  }

  get loggedUserId(){
    return this._loggedUser._id;
  }

  get likesCnt(){
    return this._loggedUser.likes.length;
  }

  get likes(){
    return this._loggedUser.likes;
  }

  get matches(){
    return this._loggedUser.matches;
  }

  get platonicLikes(){
    return this._loggedUser.platonicLikes
  }

  get pictures(){
    return this._loggedUser.pictures
  }
}


