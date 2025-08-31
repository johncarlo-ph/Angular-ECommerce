import { Component } from '@angular/core';
import { CheckoutCartItemListComponent } from "./components/checkout-cart-item-list/checkout-cart-item-list.component";
import { CheckoutUserFormComponent } from "./components/checkout-user-form/checkout-user-form.component";
import { CheckoutTotalSummaryComponent } from "./components/checkout-total-summary/checkout-total-summary.component";

@Component({
  selector: 'app-checkout',
  imports: [CheckoutCartItemListComponent, CheckoutUserFormComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  standalone: true
})
export class CheckoutComponent {

}
