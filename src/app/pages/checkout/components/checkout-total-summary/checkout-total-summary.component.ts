import { Component, computed } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout-total-summary',
  imports: [CurrencyPipe],
  templateUrl: './checkout-total-summary.component.html',
  styleUrl: './checkout-total-summary.component.css',
  standalone: true
})
export class CheckoutTotalSummaryComponent {
  cartService:CartService;
  taxRate: number = 0.12;
  shippingCost: number = 10;
  
  constructor(private _cartService: CartService){
    this.cartService = _cartService;
  }

  orderTaxAmount = computed(()=>{
    return (this._cartService.cartTotal() + this.shippingCost) * this.taxRate;
  })

  orderTotal = computed(()=>{
    return this._cartService.cartTotal() + this.orderTaxAmount();
  });



}
