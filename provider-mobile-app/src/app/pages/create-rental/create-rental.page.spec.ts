import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRentalPage } from './create-rental.page';

describe('CreateRentalPage', () => {
  let component: CreateRentalPage;
  let fixture: ComponentFixture<CreateRentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
