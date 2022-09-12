const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    console.log(`Started
  ${this.brand} ${this.model}`);
  },
};
car.start();
delete car.model;
console.log(car.model);

// we don't have access to `this` if we use an arrow function
const car2 = {
  brand: "Ford",
  model: "Fiesta",
  start: () => {
    console.log(`Started
  ${this.brand} ${this.model}`);
  },
};
car2.start();

// Methods can accept parameters, like regular functions
const car3 = {
  brand: "Ford",
  model: "Fiesta",
  goTo: function (destination) {
    console.log(`Going to ${destination}`);
  },
};
car3.goTo("Rome");
