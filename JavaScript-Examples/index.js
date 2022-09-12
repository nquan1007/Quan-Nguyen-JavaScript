// The callback function is executed asynchronously
console.log("before");
setTimeout(() => {
  // runs after 2 seconds
  console.log("inside the function");
}, 2000);
console.log("after");

// Example about callback
var users = ["Quan", "An", "Tuan"];

function addUser(username, callback) {
  setTimeout(function () {
    users.push(username);
    callback(); // printUser is called only after a new username is pushed into the array
  }, 200);
}

function printUser() {
  setTimeout(function() {
    console.log(users);
  }, 100);
}

addUser('Tai', printUser);

printUser();