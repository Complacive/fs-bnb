import { Injectable } from '@angular/core';
import { ServiceProvider } from '../models/service-provider-model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  public providers: Array<ServiceProvider> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getProviders() {
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



}