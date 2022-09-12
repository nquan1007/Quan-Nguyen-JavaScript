// CREATE A CONSTRUCTOR

// Constructor Function
function Members(name, age) {
  this.name = name;
  this.age = age;
}

const Quan = new Members("Quan", "23");
const An = new Members("An", "25");

Quan.lastName = "Nguyen";

console.log(Quan, An);

// Class
class Books {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  getName() {
    return this.name;
  }
  
  getAuthor() {
    return this.author;
  }

  static getFullInfo() {
    return "Bonjour";
  }
}

const theRichDad = new Books("Quan", "An"); // define an instance object

console.log(theRichDad.getName());
console.log(theRichDad.getAuthor());

console.log(Books.getFullInfo()); // very useful, at times
