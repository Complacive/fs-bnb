import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Provider } from '../../models/provider-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'

@Component({
  selector: 'app-existing-rentals',
  templateUrl: './existing-rentals.page.html',
  styleUrls: ['./existing-rentals.page.scss'],
})
export class ExistingRentalsPage implements OnInit {

  public providerId: number;

  public providerListings: Array<Listing> = [];

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private userService: UserService,
    private listingService: ListingService,
  ) { }

  ngOnInit() {
  }


  logOff() {
    this.navCtrl.navigateBack('login')
  }

  navToProfile() {
    this.navCtrl.navigateForward('profile');
  }

  ionViewDidEnter() {
    this.providerId = +localStorage.getItem('userId');
    console.log(this.providerId);
    
    this.providerListings = [];
    this.listingService.getAll().then((response: any) => {
      response.forEach(listing => {
        if (this.providerId == listing.providerId) {
          this.providerListings.push(listing);
        }
        console.log(this.providerListings);
      })
    }).catch(err => console.log(err));
  }
  
  navToCreateRental() {
    this.navCtrl.navigateForward('create-rental');
  }

  navToListingDetails(listing) {
    this.navCtrl.navigateForward('rental-details', {
      queryParams: {
        listingId: listing.id,
        userId: localStorage.getItem("userId")
      }
    });
  }

}
