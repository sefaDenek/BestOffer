export class Product {

  public id?: number;
  public name?:string;
  public price?:number;
  public imgUrl?:string;
  public description?:string;
  public category?:string;

    constructor(
       id?: number,
       name?:string,
       price?:number,
       imgUrl?:string,
       description?:string,
       category?:string

    ){
  this.id = id;
  this.name = name;
  this.price = price;
  this.imgUrl = imgUrl;
  this.description = description;
  this.category = category;
}



}
