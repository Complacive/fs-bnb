import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ListingImageService } from '../../services/listing.img.service'


@Component({
  selector: 'app-create-rental-images',
  templateUrl: './create-rental-images.page.html',
  styleUrls: ['./create-rental-images.page.scss'],
})
export class CreateRentalImagesPage implements OnInit {

  public imageURL: string;
  public listingId: number;

  constructor(
    private navCtrl: NavController,
    private listingImageService: ListingImageService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var urlParams = new URLSearchParams(location.search);
    this.listingId = +urlParams.get('listingImgId');
  }

  insertImage() {
    const authUser = {
      listingImgId: this.listingId,
      imageUrl: this.imageURL
    }
    console.log(this.imageURL);
    this.listingImageService.create(authUser).then((response) => {
      console.log(response);
      this.navCtrl.navigateRoot('existing-rentals');
      alert('Listing created');
    }).catch(err => alert(err));
  }

}
