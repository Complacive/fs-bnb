import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NavController, ToastController } from '@ionic/angular';
import { User } from '../../models/user-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'
import { BookingService } from '../../services/booking.service'
import { Booking } from 'src/app/models/booking-model';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNowPage implements OnInit {

  public listingId: number;
  public userId: number;

  
  public dateFrom: Date;
  public dateTo: Date;
  public status: string;

  public listingName: string;


  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private userService: UserService,
    private listingService: ListingService,
    private bookingService: BookingService,
  ) { 

    var urlParams = new URLSearchParams(location.search);
    this.listingId = +urlParams.get('listingId');
    this.userId = +localStorage.getItem("userId");
    console.log(this.listingId);
    console.log(this.userId);

    this.listingService.getById(this.listingId).then((response: any) => {
      this.listingName = response[0].name;
    }).catch(err => console.log(err));
  }

  ngOnInit() {
  }


  bookNow() {
    const booking = {
      listingId: this.listingId,
      userId: this.userId,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      status: "pending"
    }
    console.log(this.dateFrom);
    console.log(this.dateTo);
    this.bookingService.create(booking).then(res => {
      console.log(booking);
      //const testId = localStorage.getItem('userId');
      //console.log(testId);

      this.navCtrl.navigateForward('home', {
        queryParams:  {
          booking: res
        }
      });

    }).catch (err => {
        console.log(err);
    });
  }

}
