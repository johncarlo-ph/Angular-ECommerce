import { Component,signal,computed, WritableSignal, ChangeDetectionStrategy,input } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { IProduct } from '../../../core/interfaces/product.interface';
import { ICartItem } from '../../../core/interfaces/cart-item.interface';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbPopover} from '@ng-bootstrap/ng-bootstrap';

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
  popOver = input<NgbPopover | undefined>();

  constructor(private _cartService: CartService, private router: Router){
    this.cartService = _cartService;
  }

  checkout(){
    this.cartService.modalRef?.close();
    this.popOver()?.close();
    this.router.navigate(['/checkout']);
  }
}

