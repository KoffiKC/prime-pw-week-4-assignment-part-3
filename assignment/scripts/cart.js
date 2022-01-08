console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];  //initialize array to hold items

function addItem(item) {
  basket.push(item); // adds value input(item) to the end of array
  console.log(`${item} was added to your Basket!`);
  return true;
}

//testing function
console.log(addItem('Ramen')); //console should log true
console.log(addItem('Carrots'));
console.log(addItem('Popcorn'));
