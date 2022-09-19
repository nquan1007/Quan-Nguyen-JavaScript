// ES6: Class 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getJob() {
    console.log(`My job is ${this.job}`);
  }
}

class Engineer extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

var Quan = new Engineer('Quan Nguyen', 23, 'Web Developer');
console.log(Quan);
Quan.getJob();

// ES5
  // Constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(this);
// } 

// var Quan = new Person('Quan Nguyen', 23);

//   // Prototype
// Person.prototype.getJob = function() {
//   return 'I'm doing about ' + this.job;
// }

// var An = new Person('An', 29);
// An.job = 'Tester';
// console.log(An.getJob());

