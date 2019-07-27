import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Listing } from '../models/listing-model'
import { AlertController, NavController } from '@ionic/angular';
import { BookingService } from "../services/booking.service"

@Injectable({
  providedIn: 'root'
})

export class ListingService {

  currListing: Listing;

  constructor(
    private httpClient: HttpClient,
  ) { }


  create (newListing: Listing) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('http://localhost:5000/api/listings/create', newListing)
        .subscribe(
          (response : any) => {
            localStorage.setItem('insertId', response);
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get('http://localhost:5000/api/listings/get')
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

  getById(listingId: number) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post('http://localhost:5000/api/listings/getById', { "id": listingId })
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

  updateById(listing: Listing) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .patch('http://localhost:5000/api/listings/updateById', listing)
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

  removeById(listingId: number) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post('http://localhost:5000/api/listings/removeById', { "id": listingId })
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