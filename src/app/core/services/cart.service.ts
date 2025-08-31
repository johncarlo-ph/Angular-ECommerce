import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ICartItem } from '../interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems = signal<Array<ICartItem>>([]);
  
  get cartItems() {
    return this._cartItems.asReadonly();
  }

  get cartTotal(){
    return this._cartItems().reduce((accumulator, current)=> accumulator + (current.price * current.quantity), 0);
  }

  addToCart(product: IProduct) {
    let existingItemIndex = this._cartItems().findIndex(i => i.productId == product.id);

    if (existingItemIndex < 0) {
      let newItem: ICartItem = {
        productId: product.id,
        title: product.title,
        image: product.images[0],
        price: product.price,
        quantity: 1
      };

      this._cartItems.update(items => [...items, newItem]);
    }
    else{
      let existingItem = this.cartItems()[existingItemIndex];
      this._cartItems.update(items =>
        items.map(item=>
          item.productId == existingItem.productId ? { ...item, quantity: item.quantity + 1} : item
        )
      )
    }
  }

  removeFromCart(cartItem: ICartItem) {
    let index = this._cartItems().indexOf(cartItem);

    if (index >= 0) {
      this._cartItems.update(items=> items.filter(item=> item.productId != cartItem.productId));
    }
  }

  updateQuantity(cartItem: ICartItem){
    this._cartItems.update(items =>
        items.map(item=>
          item.productId == cartItem.productId ? { ...item, quantity: item.quantity} : item
        )
      )
  }
}
