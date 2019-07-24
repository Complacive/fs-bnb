import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { User } from '../models/user-model';
import { error } from '@angular/compiler/src/util';
import { Listing } from '../models/listing-model';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  //currListing: Listing;

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
  ) {}

  postListing(listing) {
    return new Promise ((resolve, reject) => {
      this.httpClient.post('http://localhost:5000/api/listings', listing)
        .subscribe(
          (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        });
    });
  }

  getAllListing() {
    return new Promise ((resolve, reject) => {
      this.httpClient.get('http://localhost:5000/api/listings/get')
        .subscribe(
          (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        });
    });
  }

  deleteListing(listing) {

  }
}
