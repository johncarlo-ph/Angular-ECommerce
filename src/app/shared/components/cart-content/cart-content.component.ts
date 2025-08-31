import { Component,signal,computed, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { IProduct } from '../../../core/interfaces/product.interface';
import { ICartItem } from '../../../core/interfaces/cart-item.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-content',
  imports: [CurrencyPipe],
  templateUrl: './cart-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './cart-content.component.css',
  standalone: true
})
export class CartContentComponent {
  cartService:CartService;

  constructor(private _cartService: CartService){
    this.cartService = _cartService;
  }
  
  qtySubtract(item: ICartItem){
    if(item.quantity <= 1){
      let remove = window.confirm("This will remove the product on your cart. Do you want to proceed?");

      if(remove){
        this.cartService.removeFromCart(item);
      }
    }
    else{
      item.quantity -= 1;
      this.cartService.updateQuantity(item);
    }
  }

  qtyAdd(item: ICartItem){
     item.quantity += 1;
     this.cartService.updateQuantity(item);
  }
}

