import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable()
export class ProductRepository implements OnInit {
    private products: Product[] = [];

    constructor(private restService: RestService){
        this.restService
        .getProducts()
        .subscribe(products =>{

          this.products = products
          console.log(this.products);
        } )
    }

    ngOnInit() {

    }


    getProduct(id: number): Product {
      let result = null;
      this.products.forEach(product => {
        if(product.id == id) {
          result = product;
        }
      })

      if(result == null)
        return new Product();
      else
        return result;
    }


    getProducts(category: Category | undefined ): Product[]{
        if(category)
            return this.products.filter(p=> p.category === category.id);
        else
            return this.products;
    }

    saveProduct(product: Product){
      if(product.id== null || product.id ==0){
        this.restService.addProduct(product)
          .subscribe(p=> this.products.push(p));
      } else {
        this.restService.updateProduct(product)
          .subscribe(p=> this.products.splice(this.products.findIndex(p=> p.id == product.id),1,product));
      }
    }

    deleteProduct(product: Product){
      this.restService.deleteProduct(product).subscribe(p=> this.products
          .splice(this.products.findIndex(p=> p.id === product.id),1));

    }



}
