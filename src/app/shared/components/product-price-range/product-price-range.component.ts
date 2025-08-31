import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { PriceRange } from '../../../core/models/pricerange-enum';


@Component({
  selector: 'app-product-price-range',
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './product-price-range.component.html',
  styleUrl: './product-price-range.component.css',
  standalone: true
})
export class ProductPriceRangeComponent {
  public PriceRange = PriceRange;
  currentPriceRange: PriceRange = PriceRange.none;

  constructor(private productService: ProductService) {
  }

  setPriceRange(range: PriceRange) {

    if (this.currentPriceRange == range) {
      this.currentPriceRange = PriceRange.none;
      this.productService.minPrice = -1;
      this.productService.maxPrice = -1;
      this.productService.getProducts();
    }
    else {
      this.currentPriceRange = range;

      switch (range) {
        case PriceRange.fiveToTen:
          this.productService.minPrice = 5;
          this.productService.maxPrice = 10;
          this.productService.getProducts();
          break;
        case PriceRange.tenToTwenty:
          this.productService.minPrice = 10;
          this.productService.maxPrice = 20;
          this.productService.getProducts();
          break;
        case PriceRange.twentyToFifty:
          this.productService.minPrice = 20;
          this.productService.maxPrice = 50;
          this.productService.getProducts();
          break;
        case PriceRange.FiftyUp:
          this.productService.minPrice = 50;
          this.productService.maxPrice = 10000;
          this.productService.getProducts();
          break;
      }
    }
  }
}
