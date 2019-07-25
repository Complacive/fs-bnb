import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Listing } from '../models/listing-model'
import { AlertController, NavController } from '@ionic/angular';
import { BookingService } from "../services/booking.service"

@Injectable({
  providedIn: 'root'
})

export class ListingImageService {

  currListing: Listing;

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController,
    private bookingService: BookingService
  ) { }

  create (newListingImage: Listing) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('http://localhost:5000/api/listingUrl/create', newListingImage)
        .subscribe(
          (response) => {
            resolve(newListingImage);
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
        .get('http://localhost:5000/api/listingUrl/get')
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

  getById(Id: number) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post('http://localhost:5000/api/listingUrl/getById', { "id": Id })
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

  getImage(listingImageId: number) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post('http://localhost:5000/api/listingUrl/getImage', { "listingImgId": listingImageId })
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