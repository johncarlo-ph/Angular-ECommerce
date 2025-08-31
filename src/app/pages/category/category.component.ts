import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../../shared/components/product-list/product-list.component';
import { ProductSearchComponent } from '../../shared/components/product-search/product-search.component';
import { ProductCategoriesComponent } from '../../shared/components/product-categories/product-categories.component';
import { ProductPriceRangeComponent } from '../../shared/components/product-price-range/product-price-range.component';
import { ICategory } from '../../core/interfaces/category.interface';
import { ProductService } from '../../core/services/product.service';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-category',
  imports: [ProductListComponent, ProductSearchComponent, ProductCategoriesComponent, ProductPriceRangeComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  standalone: true
})
export class CategoryComponent{
  name: string | null = "";

  constructor(private route: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService){
    this.route.params.subscribe({
      next: (value) =>{
        this.name = value['name'];
        this.getCategory();
      },
    });
  }
  
  getCategory(){
     if (localStorage.getItem('categories') != null) {
      let categories: Array<ICategory> = JSON.parse(localStorage.getItem('categories')!);
      this.setCategoryDetails(categories);
    }
    else{
      this.categoryService.getCategories().subscribe({
        next: (data) => {
          this.setCategoryDetails(data)
        }
      })
    }
  }

  setCategoryDetails(categories: Array<ICategory>){
    let category = categories.find(c=>c.name == this.name);

      if(category != null){
        this.productService.categoryId = category.id;
        this.productService.getProducts();
      }
  }
}
