import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NavController, ToastController } from '@ionic/angular';
import { Provider } from '../../models/provider-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  public listingId: number;
  public providerId: number;

  public listingName: string;
  public listingLocation: string;
  public listingPrice: number;
  public listingDescription: string;

  public listingImageUrl: [];
  public listings: Array<Listing> = [];


  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private userService: UserService,
    private listingService: ListingService,

  ) {

    var urlParams = new URLSearchParams(location.search);
    this.listingId = +urlParams.get('listingId');
    this.providerId = +localStorage.getItem("userId");

    this.listingService.getById(this.listingId).then((response: any) => {
      this.listingName = response[0].name;
      this.listingLocation = response[0].location;
      this.listingPrice = response[0].price;
      this.listingDescription = response[0].description;
    }).catch(err => console.log(err));


    this.listingService.getAll().then((response: any) => {
      response.forEach(listing => {
        if (this.listingId == listing.id) {
          this.listingImageUrl = listing.imgUrl;
        }
      })
    }).catch(err => console.log(err));

  }

  ngOnInit() {
  }

  navBackToHome() {
    this.navCtrl.navigateBack("existing-rentals");
  }

  navToBookingRequests() {
    this.navCtrl.navigateForward("booking-requests", {
      queryParams: {
        listingId: this.listingId,
        userId: this.providerId
      }
    });
  }

  navToEdit() {
    this.navCtrl.navigateForward("update-rental", {
      queryParams: {
        listingId: this.listingId,
        userId: this.providerId
      }
    });
  }

  navToDelete() {
    this.navCtrl.navigateForward("delete-rental", {
      queryParams: {
        listingId: this.listingId,
        userId: this.providerId
      }
    });
  }


}
