// Inheritance

class Greet {
  sayHi() {
    return "How are you?";
  }
}

class Answer extends Greet {
  sayHi() {
    return super.sayHi() + " I'm fine, thank you!"
  }
}

const howToAnswer = new Answer();

console.log(howToAnswer.sayHi());