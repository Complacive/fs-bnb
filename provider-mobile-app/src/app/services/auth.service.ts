import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

      this.http.post('http://localhost:5000/api/auth/loginProvider', authUser, { headers }).subscribe((response: any) => {
        //console.log(response.id);
        localStorage.setItem('userId', response.id);
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
      //const headers = new HttpHeaders();

      this.http.post('http://localhost:5000/api/auth/registerProvider', newUser)
      .subscribe(
        (response: any) => {
          console.log('accepting body');
          localStorage.setItem('userId', response);
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
