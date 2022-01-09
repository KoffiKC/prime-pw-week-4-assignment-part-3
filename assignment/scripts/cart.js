console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];  // initialize array to hold items

function addItem(item) {
  basket.push(item); // adds value input from argument to the end of array
  console.log(`${item} was added to your Basket!`);
  return true;
}

//testing function
console.log(addItem('Ramen')); // console should also log true
console.log(addItem('Carrots'));
console.log(addItem('Popcorn'));
console.log(addItem('Pizza'));
console.log(addItem('Sweetbread'));

function listItems(){
  let x = 1; // initializes additional varible for flavor text
  for (var i = 0; i < basket.length; i++) {
    console.log(`Item number ${x} is ${basket[i]}`); // logs each item and its place in the list
    x++; // increments for each item in the array
  }
}

//testing function
console.log(basket); //shows items and their order
listItems(); // lists item, which matches what was shown above

function empty(array){
  item = array.length -1; // initialize iterating varible to last array item
  while (item >= 0) { //checks if interated to/past the beginning of array
    array.pop(array[item]); //removes last array item
    item--;
  }
  console.log('Yor basket is now empty!'); // log to indicate function was succesful
  return true;
}

//testing function
console.log(basket); // shows basket has items
console.log(empty(basket));
console.log(basket); // shows basket empty, meaning function was successful
