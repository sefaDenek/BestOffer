import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Category } from "../model/category.model";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector:'shop',
    templateUrl: 'shop.component.html',
    styles:[`
        .pt-100 {padding-top:100px;}
        `]
})

export class ShopComponent {
    public selectedCategory:Category | undefined;
    public productsPerPage= 3;
    public selectedPage=1;
    public selectedProduct: Product[]=[];
    



    constructor(    private productRepository: ProductRepository
                    
                    ){}


    get products(): Product[] {
        let index= (this.selectedPage-1) * this.productsPerPage; // selectedpage 1 den değil 0 dan başlarsa 0 * 3 den 0. elemandan başlar

        this.selectedProduct=this.productRepository
        .getProducts(this.selectedCategory);
        return this.selectedProduct
        .slice(index,index + this.productsPerPage);
    }

    


    get pageNumbers():number[]{
        return Array(Math.ceil(this.productRepository
                        .getProducts(this.selectedCategory).length/this.productsPerPage))
                        .fill(0).map((a,i)=> i + 1 )
    }

    changePage(p:number){
        this.selectedPage=p;
    }


    getCategory(category:Category){
        this.selectedCategory= category;
    }
  


    changePageSize(size:number){
        this.productsPerPage = size;
        this.changePage(1);
    }
}