import { Component } from '@angular/core';
import { IProduct } from '../../../core/interfaces/product.interface';
import { CartService } from '../../../core/services/cart.service';
import { NgbModal, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductPriceRangeComponent } from "../product-price-range/product-price-range.component";
import { CartContentComponent } from "../cart-content/cart-content.component";
import { Options } from '@popperjs/core';

@Component({
  selector: 'app-cart-button',
  imports: [NgbPopoverModule, CartContentComponent],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css',
  standalone: true
})
export class CartButtonComponent {

  constructor(private cartService: CartService, private modalService: NgbModal) { }

  get cartItems() {
    return this.cartService.cartItems;
  }

  get cartItemCount() {
    return this.cartService.cartItems.length;
  }

  open(){
    const modalRef = this.modalService.open(CartContentComponent);
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
      console.log('onFirstUpdate', state);
      if (state.elements?.arrow) {
        state.elements.arrow.style.display = 'none';
      }
    };
    return options;
  };
}
