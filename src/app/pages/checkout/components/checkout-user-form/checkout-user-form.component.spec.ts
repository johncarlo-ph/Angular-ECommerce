import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutUserFormComponent } from './checkout-user-form.component';

describe('CheckoutUserFormComponent', () => {
  let component: CheckoutUserFormComponent;
  let fixture: ComponentFixture<CheckoutUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutUserFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
