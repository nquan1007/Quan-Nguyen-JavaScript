// ES6: Enhanced Object Property
// 1. Property Shorthand
// 2. Method Property

function person(name, age) {
  return {
    name,
    age,
    getName() {
      return this.name + " " + this.age;
    },
  };
}
console.log(person("Quan", 100));

// ES5
function person1(name, age) {
  return {
    name: name,
    age: age,
    getName: function () {
      return this.name + " " + this.age;
    },
  };
}
console.log(person1("An", 120));

// 3. Computed Property
var salary = "Salary";

// ES6
var person2 = {
  name: "An",
  age: 50,
  [`${salary}OfAn`]: 6000,
}
console.log(person2);


// ES5
var person3 = {
  name: "Quan",
  age: 100,
};
person3[salary + "OfQuan"] = 10000000000;
console.log(person3);
