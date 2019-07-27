import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRentalPage } from './delete-rental.page';

describe('DeleteRentalPage', () => {
  let component: DeleteRentalPage;
  let fixture: ComponentFixture<DeleteRentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
