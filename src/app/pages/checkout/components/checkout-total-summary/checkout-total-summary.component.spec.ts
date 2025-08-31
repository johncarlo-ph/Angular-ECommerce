import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutTotalSummaryComponent } from './checkout-total-summary.component';

describe('CheckoutTotalSummaryComponent', () => {
  let component: CheckoutTotalSummaryComponent;
  let fixture: ComponentFixture<CheckoutTotalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutTotalSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutTotalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
