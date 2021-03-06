import calculateTaxandSum, { calculateTax } from "./tax";

import { printDetails, applyDiscount } from "./utils";

class Product{
  constructor(name, price){
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }
}

let product = new Product('Hat', 100);
let taxedPrice = calculateTax(product.price);

console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`)

let mapProduct = [new Product('Fish', 200), new Product('Chicken', 700)];

let totalPrice = calculateTaxandSum(...mapProduct.map(p => p.price));

console.log(`Total Price: ${totalPrice}`);

let discountedPrice = applyDiscount(product, 2)
// console.log(`Discounted Price: ${discountedPrice}`)
//printDetails(product);
