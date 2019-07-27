import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ListingService } from '../../services/listing.service'
import { ListingImageService } from '../../services/listing.img.service'
import { Listing } from '../../models/listing-model'

@Component({
  selector: 'app-delete-rental',
  templateUrl: './delete-rental.page.html',
  styleUrls: ['./delete-rental.page.scss'],
})
export class DeleteRentalPage implements OnInit {

  public listing = new Listing();
  public listingImageUrl: [];

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private listingService: ListingService,
    private listingImageService: ListingImageService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var urlParams = new URLSearchParams(location.search);

    this.listingService.getById(+urlParams.get('listingId')).then((response: any) => {
      this.listing.id = response[0].id;
      this.listing.name = response[0].name;
      this.listing.location = response[0].location;
      this.listing.price = response[0].price;
      this.listing.description = response[0].description;
    }).catch(err => console.log(err));

    this.listingService.getAll().then((response: any) => {
      response.forEach(listing => {
        if (+urlParams.get('listingId') == listing.id) {
          this.listingImageUrl = listing.imgUrl;
        }
      })
    }).catch(err => console.log(err));
  }

  backToRentalDetails() {
    var urlParams = new URLSearchParams(location.search);
    this.navCtrl.navigateBack("rental-details", {
      queryParams: {
        listingId: +urlParams.get('listingId'),
        userId: +urlParams.get('userId')
      }
    });
  }

  deleteListing() {
    this.listingImageService.deleteByListingId(this.listing.id).then(response => {
      console.log('pics deleted');
    }).catch(err => {
      alert(err);
    });
    this.listingService.removeById(this.listing.id).then(response => {
      this.navCtrl.navigateRoot('existing-rentals');
      alert('Listing deleted');
    }).catch(err => {
      alert(err);
    });
  }


}
