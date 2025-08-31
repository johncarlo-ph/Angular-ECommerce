import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartItemListComponent } from './checkout-cart-item-list.component';

describe('CheckoutCartItemListComponent', () => {
  let component: CheckoutCartItemListComponent;
  let fixture: ComponentFixture<CheckoutCartItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutCartItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutCartItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
