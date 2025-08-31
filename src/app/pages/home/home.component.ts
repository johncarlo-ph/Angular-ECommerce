import { Component } from '@angular/core';
import { ProductListComponent } from "../../shared/components/product-list/product-list.component";
import { ProductSearchComponent } from "../../shared/components/product-search/product-search.component";
import { ProductCategoriesComponent } from "../../shared/components/product-categories/product-categories.component";
import { ProductPriceRangeComponent } from "../../shared/components/product-price-range/product-price-range.component";
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent, ProductSearchComponent, ProductCategoriesComponent, ProductPriceRangeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
  constructor(private productService: ProductService){
    this.productService.getProducts();
  }
}
