// 1. find() method
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

// 2. Commonly used syntax
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const found1 = inventory.find(inventory => inventory.name === 'bananas');

console.log(found1);