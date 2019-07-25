import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NavController, ToastController } from '@ionic/angular';
import { User } from '../../models/user-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'
import { ListingImageService } from '../../services/listing.img.service'

// allows access to query Params in URL
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {

  public listingId: number;
  public userId: number;

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
    private listingImageService: ListingImageService,
    // allows access to query Params in URL
    private route: ActivatedRoute
  ) {

    var urlParams = new URLSearchParams(location.search);
    this.listingId = +urlParams.get('listingId');
    this.userId = +localStorage.getItem("userId");

    this.listingService.getById(this.listingId).then((response: any) => {
      this.listingName = response[0].name;
      this.listingLocation = response[0].location;
      this.listingPrice = response[0].price;
      this.listingDescription = response[0].description;
      //console.log(response);
    }).catch(err => console.log(err));


    this.listingService.getAll().then((response: any) => {
      response.forEach(listing => {
        //console.log(listing);
        //console.log(listing.imgUrl);
        //console.log(this.listingId);
        //console.log(listing.id);
        if (this.listingId == listing.id) {
          //console.log(listing.imgUrl)
          this.listingImageUrl = listing.imgUrl;
          //console.log(this.listingImageUrl);
        }
      })
    }).catch(err => console.log(err));

  }

  ngOnInit() {
  }

  navBackToExplore() {
    this.navCtrl.navigateBack("home");
  }

  navToBooking() {
    this.navCtrl.navigateForward("book-now", {
      queryParams: {
        listingId: this.listingId,
        userId: this.userId
      }
    });
  }

}
