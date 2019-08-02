import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NavController, ToastController } from '@ionic/angular';
import { Provider } from '../../models/provider-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'

@Component({
  selector: 'app-update-rental',
  templateUrl: './update-rental.page.html',
  styleUrls: ['./update-rental.page.scss'],
})
export class UpdateRentalPage implements OnInit {
  
  public listing: Listing = new Listing();

  public listingId: number;
  public providerId: number;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private userService: UserService,
    private listingService: ListingService,
  ) { 

    var urlParams = new URLSearchParams(location.search);
    this.listing.id = +urlParams.get('listingId');
    this.listing.providerId = +localStorage.getItem("userId");
    //console.log(this.listingId);
    //console.log(this.providerId)

    this.listingService.getById(this.listing.id).then((response: any) => {
      this.listing.name = response[0].name;
      this.listing.location = response[0].location;
      this.listing.price = response[0].price;
      this.listing.description = response[0].description;
    }).catch(err => console.log(err));

  }

  ngOnInit() {
  }

  updateProperty() {
    this.listingService.updateById(this.listing).then(res => {
      //debugger 
      this.navCtrl.navigateRoot('existing-rentals');
    }).catch(err => {
      debugger
      console.log(err);
    })
  }

  navBackToRentalDetails() {
    this.navCtrl.navigateBack("rental-details", {
      queryParams: {
        listingId: this.listing.id,
        userId: this.listing.providerId
      }
    });
  }

}
