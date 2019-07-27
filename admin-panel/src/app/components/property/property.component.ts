import { Component, OnInit } from '@angular/core';

import { Property } from '../../models/property-model';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-users',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  public listings: Array<Property> = [];

  constructor(
    private propertyService: PropertyService
  ) { 
    this.propertyService.getListings().then((response: any) => {
      this.listings = response;
    }).catch(err => alert(err));
  }

  ngOnInit(
  ) {}

}
