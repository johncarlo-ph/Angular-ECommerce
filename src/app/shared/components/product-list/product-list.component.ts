import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { IProduct } from '../../../core/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './product-list.component.css',
  standalone: true
})
export class ProductListComponent implements OnInit{
  products = signal<Array<IProduct>>([]);
  isLoading = signal<boolean>(true);
  
  constructor(private productService: ProductService, private cartService: CartService){}

  ngOnInit(): void {
    this.productService.products.subscribe({
      next: (data)=> { 
        this.products.set(data);
        this.isLoading.set(false);
      }
    });

    this.productService.isLoading.subscribe({
      next: (loading)=>{
        this.isLoading.set(loading);
      }
    })
  }

  addToCartClicked(product: IProduct){
    this.cartService.addToCart(product);
  }

}
