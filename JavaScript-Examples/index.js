// The order of execution of Call Stack

console.log('Step 1');

setTimeout(() => { // micro tasks
  console.log('setTimeOut');
})

Promise.resolve().then(() => { // macro tasks
  console.log('Promise');
})

console.log('Step 2')