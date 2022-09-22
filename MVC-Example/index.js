class Model { // define Model [the simplest part]
  constructor() {
    // An array of todo objects with some prepopulated data 
    this.todos = [
      {
        id: 1,
        text: 'Go to the toilet',
        complete: false,
      },
      {
        id: 2,
        text: 'Clean the floor',
        complete: false,
      },
    ];
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1, // id is the previous id plus 1
      text: todoText,
      complete: false,
    }
    this.todos.push(todo);
  }
}

class View { // define View
  constructor() {
    
  }
}

class Controller { // define Controller
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

var app = new Controller(new Model(), new View());
// The app is an instance of the controller


// const x = window.prompt('viet vo day de', 'x');
// app.model.addTodo(x);
// console.log(app.model.todos);

