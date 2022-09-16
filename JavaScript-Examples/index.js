// ES6 let, const 
for (let i = 0; i < 10; i++) { // i : block scope
  console.log(i);
}

console.log(i); // not defined

const array = ['Di hoc', 'Di lam']; // can not reassigned

// ES5
var firstName = 'Quan';

function getName() {
  var lastName = 'Nguyen'; // functional scope
  return firstName + ' ' + lastName;
}

console.log(getName())