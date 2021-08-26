import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product.model";
import {CategoryRepository} from "../../../model/category.repository";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit(): void {
  }

  getCategory (): Product[] {
    return this.categoryRepository.getCategories();
  }
  deleteCategory(product: Product){
    this.categoryRepository.deleteCategory(product);
  }

}
