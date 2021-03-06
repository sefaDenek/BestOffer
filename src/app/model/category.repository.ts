import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";
import {Product} from "./product.model";

@Injectable()
export class CategoryRepository implements OnInit {

    private categories: Category[] = [];

    constructor(private restService: RestService){
        this.restService
            .getCategories()
            .subscribe(categories => this.categories = categories);
    }

    ngOnInit() {

    }

    getCategory(id: number): Category {
      let result = null;
      this.categories.forEach(categories => {
        if(categories.id == id) {
          result = categories;
        }
      })

      if(result == null)
        return new Product();
      else
        return result;
    }



    getCategories(): Category[] {
        return this.categories;

    }

    saveCategory(category: Category){
      if(category.id== null || category.id ==0){
        this.restService.addCategory(category)
          .subscribe(p=> this.categories.push(p));
      } else {
        this.restService.updateCategory(category)
          .subscribe(p=> this.categories.splice(this.categories.findIndex(p=> p.id == category.id),1,category));
      }
    }


  deleteCategory(category: Category){
    this.restService.deleteCategory(category).subscribe(p=> this.categories
      .splice(this.categories.findIndex(p=> p.id === category.id),1));

  }



}
