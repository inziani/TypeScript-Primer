
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

function createProductIterator(){
  const computer = new Product('Computer', 150000);
  const mouse = new Product ('Mouse', 2000);
  const charger = new Product ('Charger', 4000);

  let lastVal;
  return {
    next(){
      switch (lastVal){
        case undefined:
          lastVal = computer;
          return { value: computer, done: false};
        case computer:
          lastVal = mouse;
          return { value: mouse, done: false};
        case mouse:
          lastVal = charger;
          return {value: charger, done: false};
        case charger:
          return { value: undefined, done: true};
      }
    }
  }
}


class Thing{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  toString(){
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let data = {
  phone: new Thing('Phone', 20000)
}
data.book = new Thing('Maths', 100);

Object.keys(data).forEach(key => console.log(data[key].toString()));

let file = new Map();
file.set('phone', new Thing('Samsung', 40000));
file.set('book', new Thing('English', 1500));

[...file.keys()].forEach(key => console.log(file.get(key).toString()));

// Modules



