import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Booking } from '../models/booking-model'
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  public booking: Booking = new Booking();

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) { }

  create(booking: Booking) {
    return new Promise((resolve, reject) => {

      this.httpClient.post('http://localhost:8000/api/booking/create', booking)
        .subscribe((response) => {
        console.log(response);
        resolve(response);
      },
        (err) => {
          console.log(err);
          reject(err);
        });

    });
  }
}

