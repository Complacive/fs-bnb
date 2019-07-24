import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider-model';
import { ServiceProviderService } from '../../services/service-provider/service-provider.service'


@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  serviceProviders: Array<ServiceProvider>;

  constructor(
    private spService: ServiceProviderService
  ) {

    this.serviceProviders = this.spService.getServiceProviders();

  }

  ngOnInit() {
  }

}