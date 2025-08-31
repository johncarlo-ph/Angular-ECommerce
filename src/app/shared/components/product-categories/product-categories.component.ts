import { Component } from '@angular/core';
import { ICategory } from '../../../core/interfaces/category.interface';
import { CategoryService } from '../../../core/services/category.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-categories',
  imports: [NgbCollapseModule, RouterLink],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.css',
  standalone: true
})
export class ProductCategoriesComponent {
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
  categories: Array<ICategory> = [];
  isCollapsed = false;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      }
    })
  }
}
