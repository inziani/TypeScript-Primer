let hat = {
  name: 'Hat',
  price: 100,
  
  getPriceIncTax(){
    return Number(this.price) * 1.16;
  }
};

name='Rob'

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`toString: ${hat.toString()}`)

// Prototypes

console.log(`${Object.getPrototypeOf(hat)}`)
console.log(`${Object.getOwnPropertyNames(hat)}`)

console.log(`${this.name}`)

// Constructor Functions

let Product = function(name, price){
  this.name = name;
  this.price = price; 
}

Product.prototype.toString = function(){
  return `toString: Name: ${this.name}, Price: ${this.price}`;
}

Product.process = (...products) => products.forEach(p => console.log(p.toString))


Product.process(new Product('food', 200), new Product ('water', 300));

//console.log(vehicle.toString());

// Static properties and methods

console.log(hat.toString());

// Classes

class Products {
  constructor (name, price){
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let vehicle = new Products('car', 1300);
let house = new Products('Flat', 4500);

console.log(vehicle.toString());
console.log(house.toString());

// Inheritance in classes

class TaxedProduct extends Products{

  constructor(name, price, taxRate = 1.16){
    super(name, price);
    this.taxRate = taxRate;
  }

  getPriceIncTax(){
    return Number(this.price) * this.taxRate;
  }

  toString(){
    let chainResult = super.toString();
    return `${chainResult}, Tax: ${this.getPriceIncTax()}`
  }

  static process(...products){
    products.forEach(p => console.log(p.toString()));
  }

}
let dress = new TaxedProduct('Maxi', 2000);
let short = new TaxedProduct('Flat', 3400, 1.20);

console.log(dress.toString());
console.log(short.toString());

TaxedProduct.process(new TaxedProduct('bag', 160))

console.log(`${dress.process}`)

// Iterators and Generators




