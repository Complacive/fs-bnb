import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Provider } from '../../models/provider-model'
import { Listing } from '../../models/listing-model'
import { ListingService } from '../../services/listing.service'
import { Booking } from '../../models/booking-model'
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.page.html',
  styleUrls: ['./booking-requests.page.scss'],
})
export class BookingRequestsPage implements OnInit {

  public providerId: number;
  public listingId: number;

  public pendingBoookingRequests: Array<Booking> = [];
  public acceptedBoookingRequests: Array<Booking> = [];
  public rejectedBoookingRequests: Array<Booking> = [];

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private userService: UserService,
    private listingService: ListingService,
    private bookingService: BookingService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var urlParams = new URLSearchParams(location.search);
    this.listingId = +urlParams.get('listingId');
    this.providerId = +localStorage.getItem("userId");
    console.log(this.listingId);
    console.log(this.providerId)

    this.pendingBoookingRequests = [];
    this.acceptedBoookingRequests = [];
    this.rejectedBoookingRequests = [];

    this.bookingService.getByListingId(this.listingId).then((response: any) => {
      response.forEach(request => {
        if (request.status == "pending") {
          this.pendingBoookingRequests.push(request);
        }
        if (request.status == "accepted") {
          this.acceptedBoookingRequests.push(request);
        }
        if (request.status == "rejected") {
          this.rejectedBoookingRequests.push(request);
        }
      })
    }).catch(err => {
      console.log(err);
    });
  }

  acceptBooking(id) {
    this.bookingService.updateStatus(id, 'accepted').then(response => {
      this.navCtrl.navigateRoot('existing-rentals');
    }).catch(err => {
      alert(err);
    })
  }

  rejectBooking(id) {
    this.bookingService.updateStatus(id, 'rejected').then(response => {
      this.navCtrl.navigateRoot('existing-rentals');
    }).catch(err => {
      alert(err);
    })
  }

}
