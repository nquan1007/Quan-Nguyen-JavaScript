// ES6: Extended Parameter Handling 
  // Default Parameter & Rest Parameter
function getNameES6(name = 'Quan', age = 23, ...rest) {
  console.log(name + ' ' + age);
  console.log('rest', rest)
}

getNameES6('An', 30, 'Doctor', 10000);
  
  // Spread Operator
const Quan = ['Quan Nguyen', 23];
const An = ['An Nguyen', 24, ...Quan];
console.log(An);

const Tuan = {
  name: 'Tuan Hoang', 
  age: 23
}
const Vu = {
  job: 'Bartender', 
  school: 'DTU',
  ...Tuan,
}
console.log(Vu);


