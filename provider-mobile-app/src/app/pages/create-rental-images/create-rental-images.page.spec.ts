import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRentalImagesPage } from './create-rental-images.page';

describe('CreateRentalImagesPage', () => {
  let component: CreateRentalImagesPage;
  let fixture: ComponentFixture<CreateRentalImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRentalImagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRentalImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
