import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';


const filterdUsers = gql`
    query users($stackName: String!, $loggedUserCity: String!){
      users(stackName: $stackName, loggedUserCity: $loggedUserCity){
        _id
        aboutUser {
          name
          age
          aboutMe
          city
          isOnline
        }
        pictures
      }
    }
`;

const doLikeOrPass = gql`
mutation doLikeOrPass($loggedUserId: String!, $currStackUserId: String!){
  doLikeOrPass(loggedUserId: $loggedUserId, currStackUserId: $currStackUserId){
    ... on LikeObject {
      user {
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
          aboutUser {name, city, isOnline, age}
          pictures
        }
        platonicLikes {
          _id
          aboutUser {name, city, isOnline, age}
          pictures
        }
        matches {
          _id
          aboutUser {name}
          pictures
        }
      },
      likeStatus
    }
    ... on StatusObject {
      status
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  getUsers(filter, loggedUserCity){
    return this.apollo
    .watchQuery({
      query: filterdUsers,
      variables: {
        stackName: filter,
        loggedUserCity
      },
    })
  }

  doLikeOrPass(loggedUserId, currStackUserId){
    return this.apollo.mutate({
      mutation: doLikeOrPass,
      variables: {
        loggedUserId,
        currStackUserId
      }
    })
  }
}
