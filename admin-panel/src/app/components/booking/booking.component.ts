import { Component, OnInit } from '@angular/core';

import { Booking } from '../../models/booking-model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public bookings: Array<Booking> = [];

  constructor(
    private bookingService: BookingService,
  ) { 
    this.bookingService.getBookings().then((response: any) => {
      this.bookings = response;
    }).catch(err => alert(err));
  }

  ngOnInit() {
  }

}
