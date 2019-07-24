import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public user = new User();
  public listings: Array <Listing> = [];
  //public listings: Listing[];

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private userService: UserService,
    private listingService: ListingService
  ) { 

    this.user.id = +localStorage.getItem('userId');
    console.log(this.user.id);

    /*
    const listingCallback = (err, listings) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      console.log(listings);
      this.listings = listings;
    };
    */

    //this.listingService.getAllListings(listingCallback);

    //const userCallback = ()
  }


  logOff() {
    this.navCtrl.navigateBack('login')
  }

  navToProfile() {
    this.navCtrl.navigateForward('profile');
  }

  navToListingDetails() {
    this.navCtrl.navigateForward('listing-details', {
      queryParams : {
        //listingId: list.id,
        //userId: userid
      }
    });
  }

}
