import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartContentComponent } from "../cart-content/cart-content.component";
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-content-modal',
  templateUrl: './cart-content-modal.component.html',
  styleUrl: './cart-content-modal.component.css',
   standalone:true,
   imports: [CartContentComponent]
})
export class CartContentModalComponent {
  cartModal: NgbActiveModal;

  constructor(private modal: NgbActiveModal, private cartService: CartService){
    this.cartModal = modal;
  }

  get cartItemCount() {
    return this.cartService.cartItems().length;
  }

  close(){
    this.cartModal.close();
  }
}