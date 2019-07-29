import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NavController, ToastController } from '@ionic/angular';
import { Provider } from '../../models/provider-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'

@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.page.html',
  styleUrls: ['./create-rental.page.scss'],
})
export class CreateRentalPage implements OnInit {

  public providerId: number;
  public listing: Listing = new Listing();

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private userService: UserService,
    private listingService: ListingService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var urlParams = new URLSearchParams(location.search);
    this.providerId = +localStorage.getItem("userId");
    this.listing.providerId = this.providerId;
  }

  createListing(listing) {
    this.listingService.create(listing).then(response => {
      this.navCtrl.navigateForward('create-rental-images', {
        queryParams: {
          listingImgId: response
        }
      });
      alert('Insert listing images for property');
    }).catch(err => {
      alert(err);
    });
  }

  navBackToExistingListings() {
    this.navCtrl.navigateBack('existing-rentals');
  }

}
