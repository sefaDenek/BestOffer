import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryRepository} from "../../../model/category.repository";
import {Category} from "../../../model/category.model";
import {Product} from "../../../model/product.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  editing: Boolean = false;
  category: any;

  constructor(private activeRoute: ActivatedRoute, private repository: CategoryRepository, private router:Router) {
    this.category= new Category();
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      this.category = repository.getCategory(activeRoute.snapshot.params['id']);
    }
  }

  ngOnInit(): void {
  }

  save(form:NgForm){
    this.repository.saveCategory(this.category);
    this.router.navigateByUrl('/admin/main/categories');
  }

}
