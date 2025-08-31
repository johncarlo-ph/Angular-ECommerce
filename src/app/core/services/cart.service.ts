import { computed, effect, Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ICartItem } from '../interfaces/cart-item.interface';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems = signal<Array<ICartItem>>([]);
  modalRef: NgbModalRef | undefined;
  
  constructor(){
    if(localStorage.getItem('cart-items') != null){
      this._cartItems.set(JSON.parse(localStorage.getItem('cart-items')!) as Array<ICartItem>);
    }

    effect(()=>{
      let cartItems = this._cartItems();
      localStorage.setItem('cart-items', JSON.stringify(cartItems));
    })
  }

  get cartItems() {
    return this._cartItems.asReadonly();
  }

  cartTotal = computed(()=>{
    return this._cartItems().reduce((accumulator, current)=> accumulator + (current.price * current.quantity), 0);
  });

  clearCart(){
    this._cartItems.set([]);
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
  
  qtySubtract(item: ICartItem){
      if(item.quantity <= 1){
        let remove = window.confirm("This will remove the product on your cart. Do you want to proceed?");
  
        if(remove){
          this.removeFromCart(item);
        }
      }
      else{
        item.quantity -= 1;
        this.updateQuantity(item);
      }
  }
  
  qtyAdd(item: ICartItem){
       item.quantity += 1;
       this.updateQuantity(item);
  }

  private updateQuantity(cartItem: ICartItem){
    this._cartItems.update(items =>
        items.map(item=>
          item.productId == cartItem.productId ? { ...item, quantity: item.quantity} : item
        )
      )
  }
}
