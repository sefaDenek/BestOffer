import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";


@Injectable()
export class Cart {
    public items:CartItem[]= [];
    public itemCount:number=0;
    public total: number=0;

    addItem(product:Product , quantity:number=1){
        let item = this.items.find(i=> i.product.id==product.id);
        if(item != undefined){
            item.quantity+=quantity;
        }else {
            this.items.push(new CartItem(product,quantity));
        }
        this.calculate(); //ürün eklendiğinde tekrar hesaplama yapılacak
    }


    calculate(){  //sepet maliyet hesap
        this.itemCount = 0;
        this.total=0;

        this.items.forEach(item=> {
            this.itemCount+= item.quantity;
            if(item.product.price)
            this.total += (item.quantity * item.product.price);
        })
    }

    updateQuantity(product:Product, quantity:number){
        let item = this.items.find(i=> i.product.id==product.id);
        if(item!= undefined){
            item.quantity = quantity;
        }
        this.calculate();
    }



    removeItem(id:number | undefined){
        let index = this.items.findIndex(i=> i.product.id==id); // silinecek itemın indexini bulduk
        this.items.splice(index,1); //silme işlemini yaptık
        this.calculate();

    }

    clear(){
        this.items=[];
        this.itemCount = 0; 
        this.total=0;
    }

}

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number){    }
}