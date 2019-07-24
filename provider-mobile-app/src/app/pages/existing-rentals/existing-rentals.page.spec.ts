import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingRentalsPage } from './existing-rentals.page';

describe('ExistingRentalsPage', () => {
  let component: ExistingRentalsPage;
  let fixture: ComponentFixture<ExistingRentalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingRentalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingRentalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
