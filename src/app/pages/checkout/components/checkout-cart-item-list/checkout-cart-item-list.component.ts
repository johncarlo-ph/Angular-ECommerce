import { Component } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout-cart-item-list',
  imports: [CurrencyPipe],
  templateUrl: './checkout-cart-item-list.component.html',
  styleUrl: './checkout-cart-item-list.component.css',
  standalone: true
})
export class CheckoutCartItemListComponent {
  cartService: CartService;

  constructor(private _cartService: CartService) {
    this.cartService = _cartService;
  }

}
