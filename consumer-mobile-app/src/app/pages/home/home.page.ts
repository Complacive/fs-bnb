import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'
import { ListingImageService } from '../../services/listing.img.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public user = new User();
  public listings: Array <Listing> = [];
  public listingImage: Array <any> = [];


  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private userService: UserService,
    private listingService: ListingService,
    private listingImageService: ListingImageService
  ) { 


    this.user.id = +localStorage.getItem('userId');
    console.log(this.user.id);


    this.listingService.getAll().then((response: any) => {
      this.listings = response;
      console.log(this.listings);
    }).catch(err => console.log(err));


    this.listingImageService.getAll().then((response: any) => {
      this.listingImage = response;
      console.log(this.listingImage);
    }).catch(err => console.log(err));


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
