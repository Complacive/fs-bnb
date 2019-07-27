import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { Provider } from '../models/provider-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUser: Provider;

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
  ) { }

  createProvider(newProvider: Provider) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('http://localhost:5000/api/user/create', newProvider)
        .subscribe(
          (response) => {
            resolve(newProvider);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }

  getAllProviders() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get('http://localhost:5000/api/provider/get')
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
        .post('http://localhost:5000/api/provider/getById', { "id": userId })
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
