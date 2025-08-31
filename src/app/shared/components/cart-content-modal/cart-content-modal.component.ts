import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartContentComponent } from "../cart-content/cart-content.component";

@Component({
  selector: 'app-cart-content-modal',
  templateUrl: './cart-content-modal.component.html',
  styleUrl: './cart-content-modal.component.css',
   standalone:true,
   imports: [CartContentComponent]
})
export class CartContentModalComponent {
  cartModal: NgbActiveModal;

  constructor(private modal: NgbActiveModal){
    this.cartModal = modal;
  }

  close(){
    this.cartModal.close();
  }
}
