import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    localStorage.setItem('categories','');
    return this.http.get<Array<ICategory>>('https://api.escuelajs.co/api/v1/categories');
  }
}
