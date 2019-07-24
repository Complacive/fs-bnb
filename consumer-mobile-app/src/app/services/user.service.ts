import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  loggedInUser: User;

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
  ) { }


  createUser(newUser: User) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('http://localhost:5000/api/user/create', newUser)
        .subscribe(
          (response) => {
            resolve(newUser);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get('http://localhost:5000/api/user/get')
        .subscribe(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }

  getById(userId: number) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post('http://localhost:5000/api/user/getById', { "id": userId })
        .subscribe(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }



  /*
  setLoggedInUser(user: any) { // This should be type user
    this.loggedInUser = user;
  }

  getLoggedInUser(): any { // This should be type user
    return this.loggedInUser;
  }
  */

}
