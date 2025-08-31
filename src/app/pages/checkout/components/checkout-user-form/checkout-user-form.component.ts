import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CheckoutTotalSummaryComponent } from '../checkout-total-summary/checkout-total-summary.component';
import { CartService } from '../../../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-user-form',
  imports: [ReactiveFormsModule, CheckoutTotalSummaryComponent],
  templateUrl: './checkout-user-form.component.html',
  styleUrl: './checkout-user-form.component.css',
  standalone: true
})
export class CheckoutUserFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private cartService: CartService, private router: Router) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street1: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.cartService.clearCart();
      this.router.navigate(['/checkout/success']);
    }
    else {
      this.userForm.markAllAsTouched();
    }
  }
}
