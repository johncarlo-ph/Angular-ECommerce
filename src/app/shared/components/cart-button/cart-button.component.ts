import { Component, OnDestroy } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { NgbModal, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { CartContentComponent } from "../cart-content/cart-content.component";
import { Options } from '@popperjs/core';
import { CartContentModalComponent } from '../cart-content-modal/cart-content-modal.component';

@Component({
  selector: 'app-cart-button',
  imports: [NgbPopoverModule, CartContentComponent],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css',
  standalone: true
})
export class CartButtonComponent{

  constructor(private cartService: CartService, private modalService: NgbModal) { }
  get cartItemCount() {
    return this.cartService.cartItems().length;
  }

  open(){
    this.cartService.modalRef = this.modalService.open(CartContentModalComponent);
  }

  popperOptions = (options: Partial<Options>) => {
    // customize placement
    options.placement = 'left';

    // customize modifiers
    for (const modifier of options.modifiers || []) {
      // disable flip
      if (modifier.name === 'flip') {
        modifier.enabled = false;
      }

      // customize offset
      if (modifier.name === 'offset' && modifier.options) {
        modifier.options['offset'] = () => [20, 20];
      }
    }

    // first update callback
    options.onFirstUpdate = (state) => {
      if (state.elements?.arrow) {
        state.elements.arrow.style.display = 'none';
      }
    };
    return options;
  };
}
