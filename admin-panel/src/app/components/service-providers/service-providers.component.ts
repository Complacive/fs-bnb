import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider-model';
import { ServiceProviderService } from '../../services/service-provider.service'


@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  public providers: Array<ServiceProvider> = [];

  constructor(
    private providerService: ServiceProviderService
  ) {
    this.providerService.getProviders().then((response: any) => {
      this.providers = response;
    }).catch(err => alert(err));

  }

  ngOnInit() {
  }

}