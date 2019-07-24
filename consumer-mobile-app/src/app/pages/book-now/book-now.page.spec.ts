import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowPage } from './book-now.page';

describe('BookNowPage', () => {
  let component: BookNowPage;
  let fixture: ComponentFixture<BookNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
