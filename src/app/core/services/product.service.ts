import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products$ = new Subject<Array<IProduct>>();
  private productLoading$ = new BehaviorSubject<boolean>(false);
  isLoading = this.productLoading$.asObservable();
  products = this.products$.asObservable();

  titleSearch:string = "";
  categoryId:number = 0;
  minPrice:number = -1;
  maxPrice:number = -1;

  constructor(private http: HttpClient) { }

  getProducts() {
    this.productLoading$.next(true);
    var parameters = new HttpParams();

    if(this.titleSearch.length > 0){
      parameters = parameters.set('title', this.titleSearch)
    }

    if(this.categoryId > 0){
      parameters = parameters.set('categoryId', this.categoryId)
    }
    
    if(this.minPrice >= 0){
      parameters = parameters.set('price_min', this.minPrice)
    }
    
    if(this.maxPrice >= 0){
      parameters = parameters.set('price_max', this.maxPrice)
    }

    this.http.get<Array<IProduct>>('https://api.escuelajs.co/api/v1/products', {params: parameters})
    .subscribe({
      next: (products) => {
        this.products$.next(products);
      }
    })
  }
}
