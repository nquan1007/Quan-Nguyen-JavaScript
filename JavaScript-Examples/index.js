// List out the items in an array

const array = ['Cuoc', 'doi', 'sao', 'kho', 'khan', 'den', 'the'];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element); 
}

for (let element of array) { // slower than the others
  console.log(element);
}

console.time('forEach'); // fastest wa
array.forEach(element => {
  console.log(element);
})
console.timeEnd('forEach');
