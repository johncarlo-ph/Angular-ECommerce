import { Component, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  imports: [FormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css',
  standalone: true
})
export class ProductSearchComponent {
  searchString = signal<string>('');
  hasSearch = signal<boolean>(false);

  constructor(private productService: ProductService){
    this.searchString.set(this.productService.titleSearch);

    if(this.searchString() != ""){
      this.hasSearch.set(true);
    }
    else{
      this.hasSearch.set(false);
    }
  }

  searchProduct(){
    if(this.searchString().length > 0){
      this.hasSearch.set(true);
    }
    
    this.productService.titleSearch = this.searchString();
    this.productService.getProducts();
  }

  searchStringChanged(){
    if(this.searchString() == ""){
      this.hasSearch.set(false);
    }
  }
}
