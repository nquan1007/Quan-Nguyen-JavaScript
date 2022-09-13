// What is callback hell?

setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
      setTimeout(function () {
        console.log(4);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Promises
var promise = new Promise((resolve, reject) => {
  // (resolve, reject) -> executor
  resolve();
  reject();
});

promise
  .then(() => {
    console.log("Sucessful");
  })
  .catch(() => {
    console.log("Failed");
  })
  .finally(() => {
    console.log("Done");
  });
