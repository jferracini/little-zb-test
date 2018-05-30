import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWidgetDonationComponent } from './app-widget-donation.component';

describe('AppWidgetDonationComponent', () => {
  let component: AppWidgetDonationComponent;
  let fixture: ComponentFixture<AppWidgetDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWidgetDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWidgetDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
