import { TestBed } from '@angular/core/testing';

import { ListingImageService } from './listing.img.service';

describe('ListingImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  
  it('should be created', () => {
    const service: ListingImageService = TestBed.get(ListingImageService);
    expect(service).toBeTruthy();
  });
});
