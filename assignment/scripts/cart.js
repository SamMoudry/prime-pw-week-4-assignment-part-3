console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem ( item ) {
  if (typeof item == "string") {
    basket.push(item);
    return true;
  }
}
function listItems () {
  for (let i = 0; i < basket.length; i++) {
    return basket[i];
  }
}

function empty () {
  return basket = [];
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log(listItems());
