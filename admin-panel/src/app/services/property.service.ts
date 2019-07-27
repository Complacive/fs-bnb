import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getListings() {
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
  
}