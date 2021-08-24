import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
    public id?: number;
    public name?: string;
    public address?: string;
    public city? : string;
    public phone?: string;
    public email?: string;

    public isSent : boolean= false;

    constructor(public cart:Cart){}


    clearOrder(){
        this.id = this.name = this.phone = this.email =this.address= this.city = undefined; 
        this.isSent=false;
        this.cart.clear();
    }

}