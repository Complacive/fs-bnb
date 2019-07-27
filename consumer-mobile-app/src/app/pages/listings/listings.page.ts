import { Component, OnInit } from '@angular/core';

import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing-model';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  public listings: Array<Listing> = [];
  public showListings: Boolean = true;

  constructor(
    private listingsService: ListingService
  ) {
    //this.listings = this.listingsService.getListItems();
  }

  ngOnInit() {
  }

  showHideListings() {
    console.log(this.showListings);
    if (this.showListings === true) {
      this.showListings = false;
    } else {
      this.showListings = true;
    }
  }

}
