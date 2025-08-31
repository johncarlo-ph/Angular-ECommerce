import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContentModalComponent } from './cart-content-modal.component';

describe('CartContentModalComponent', () => {
  let component: CartContentModalComponent;
  let fixture: ComponentFixture<CartContentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartContentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
