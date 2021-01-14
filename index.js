let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`)
let bootsPrice = 100;
console.log(`Boots price:${bootsPrice}`)

if (hatPrice === bootsPrice){
  console.log('Prices are the same');}
else {

  console.log('Prices are different')
  }

let totalPrice = hatPrice + bootsPrice;
console.log(`Total Cost: ${totalPrice}`)
let myVariable = "Val";
let secVar = 100
console.log(`Variable type: ${typeof myVariable}`)
console.log(`Variable type: ${typeof secVar}`)

let firstCity;
let secondCity = firstCity || 'London';
console.log(`City: ${secondCity}`);

function sumPrices(first, second, third = 1975){
  return first + second + third;
}

let newTotalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`New Total: ${newTotalPrice}, ${typeof newTotalPrice}`)

function newSumPrices(...numbers){
  return numbers.reduce(function(total, val){
    return total + val
  }, 0)
}

console.log(newSumPrices(1, 2, 3, 4, 5))

// Arrays

let names = ['Sophia', 'Malakai', 'Jendekah'];
let prices = [];
prices.push(100)
prices.push('100')
prices.push(50.25)

console.log(`First name: ${names[0]}: ${prices[0]}, Price List: ${prices}`);

let combinedArray = [...names, ...prices];
console.log(combinedArray)
combinedArray.forEach(element => console.log(`Combined Array Element: ${element}`));

let hat = {
  name: 'Hat',
  price: 100
};

let boots = {
  name: 'Boots',
  price: 200
};

let totalCost = (...numbers) => numbers.reduce((total, val) => total + val)

console.log(`Totals: ${totalCost(1, 1, 1, 1)}`)

let gloves = { 
  productName: 'Gloves',
  price: 40
}

gloves.name = gloves.productName;

console.log(`Cost: ${totalCost(hat.price, boots.price, gloves.price)}`)

let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0;

console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

let otherHat = {...hat,...gloves};
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);

let addProperties = {...hat, discounted: true};
console.log(`Aditional: ${JSON.stringify(addProperties)}`)

let replaceProperties = {...hat, price: 10};
console.log(`Replaced: ${JSON.stringify(replaceProperties)}`)

let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);


//  Arrow functions

let dressPrice = 100;
console.log(`Dress price: ${dressPrice}`);

let shoesPrice = '100';
console.log(`Shoes price : ${shoesPrice}`);

function clothPrices(...numbers){
  return numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0: Number(val)));
}

let clothesTotal = clothPrices(dressPrice, shoesPrice);
console.log(`Total clothes prices : ${clothesTotal} ${typeof clothesTotal}`);

clothesTotal = clothPrices(100, 200, 300);
console.log(`Second total : ${clothesTotal} ${typeof clothesTotal}`)

clothesTotal = clothPrices(100, 200, undefined, false, 'hello')
console.log(`Testing Naan total ${clothesTotal} ${typeof clothesTotal}`)

// Working with arrays

let kitchenUtencils = ['Pans', 'Spoons', 'Jugs'];
let kitchenPrices = [];

kitchenPrices.push(100);
kitchenPrices.push('100');
kitchenPrices.push(50.25);

console.log(`First item: ${kitchenUtencils[0]} - ${kitchenPrices[0]}`);

let kitchenTotals = (...numbers) => numbers.reduce((total, val) => total + (Number.isNaN(Number(val)) ? 0 :Number(val)));

let kitchenSums = kitchenTotals(...kitchenPrices);
console.log(`Kitchen Totals - ${kitchenSums} : ${typeof kitchenSums}`);

// Spread operator on arrays

let newArray = [...kitchenUtencils, ...kitchenPrices];
console.log(`New Array ${newArray}`);

newArray.forEach(element => console.log(`New Array elements : ${element}`))

// Objects

let spoon = 
  {name:'Spoon', price:120};

let pan = 
{ name: 'Pan', price:200
};

let bigSpoon = {...spoon};



objectTotals = kitchenTotals(spoon.price, pan.price)
console.log(`Object Totals : ${objectTotals}`)

let propertyChecktwo = spoon.price || 0
let objectAndPropertyChecktwo = (spoon ||{}).price||0;

console.log(`The checks : ${propertyChecktwo} , ${objectAndPropertyChecktwo}`);

console.log(`Spread on objects : ${bigSpoon.name} ${bigSpoon.price}, ${spoon.name} , ${otherHat}`);

let usage = { ...spoon, eating: true}
console.log(`Added items - ${JSON.stringify(usage)}`);

// Getters and setters

let seats = {
  name: 'Sofa',
  _price:3000,
  priceIncTax: 3000 * 1.16,

  set price(newPrice){
    this._price = newPrice;
    this.priceIncTax = this.price * 1.20;
  },

  get price(){
    return this._price;
  }

}

let beds = {
  name: 'kingSize',
  price: 10000,

  get priceIncTax(){
    return Number(this.price) * 1.16
  }
}

console.log(`Kitchen prices ${seats.price}, Tax Inclusive price ${seats.priceIncTax}`)

console.log(`Bed prices ${beds.price} , Bed prices inclusive of tax ${beds.priceIncTax}`)

// Methods

let residence = {
  name: 'Parklands',
  _rent: 50000,
  rentIncTax: 50000 * 1.16,

  set rent(newRent){
    this._rent = newRent;
    this.rentIncTax = this._rent * 1.16;
  },

  get rent(){
    return this._rent;
  },

  writeDetails() {
    console.log(`${this.name}, ${this._rent}, ${this.rentIncTax}`);
  }
    // console.log(`${residence.name}, ${residence._rent}, ${residence.rentIncTax}`)
  
};

let job = {
  name: 'TSC',
  salary: 30000,

  get salaryIncTax(){
    return Number(this.salary) * 1.30;
  }
};

residence.writeDetails();
residence.rent = 40000;
residence.writeDetails();

// Understanding this is methods 








