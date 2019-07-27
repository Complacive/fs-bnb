import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/user-model';
import { UserService } from '../services/user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(authUser) {
    return new Promise((resolve, reject) => {
      //console.log(authUser);
      const headers = new HttpHeaders();

      this.http.post('http://localhost:5000/api/auth/login', authUser, { headers }).subscribe((response: any) => {
        //console.log(response.id);
        localStorage.setItem('userId', response.id);
        //localStorage.setItem('userFirstName', response.firstName);
        //localStorage.setItem('userLastName', response.lastName);
        //localStorage.setItem('userEmail', response.email);
        resolve(response);
      },
        (err) => {
          //console.log(err);
          reject(err);
        });

    });
  }

  registerUser(newUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.http.post('http://localhost:5000/api/auth/register', newUser, { headers })
        .subscribe(
          (response: any) => {
            localStorage.setItem('userId', response);
            console.log(response);
            //console.log('accepting body');
            resolve(response);
          },
          (err) => {
            console.log('rejecting body');
            reject(err);
          }
        )
    })
  }

}
