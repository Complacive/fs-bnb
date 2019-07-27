import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getUsers() {
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
  
}