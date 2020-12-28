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