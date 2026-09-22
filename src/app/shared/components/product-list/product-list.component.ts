import { ChangeDetectionStrategy, Component, OnInit, computed, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { IProduct } from '../../../core/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { PageAlertService } from '../../../core/services/page-alert.service';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './product-list.component.css',
  standalone: true
})
export class ProductListComponent implements OnInit{
  readonly pageSize = 9;

  products = signal<Array<IProduct>>([]);
  isLoading = signal<boolean>(true);
  currentPage = signal<number>(1);

  totalPages = computed(() => Math.max(1, Math.ceil(this.products().length / this.pageSize)));

  pagedProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.products().slice(start, start + this.pageSize);
  });

  pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  constructor(private productService: ProductService, private cartService: CartService, private alertService: PageAlertService){}

  ngOnInit(): void {
    this.productService.products.subscribe({
      next: (data)=> {
        this.products.set(data);
        this.currentPage.set(1);
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
    this.alertService.alertMessage('Item added to cart', 5000);
  }

  goToPage(page: number){
    if(page < 1 || page > this.totalPages()) return;
    this.currentPage.set(page);
  }

}
