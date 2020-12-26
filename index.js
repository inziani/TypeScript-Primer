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