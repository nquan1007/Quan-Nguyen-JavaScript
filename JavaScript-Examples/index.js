// Async Await syntax
const getQuan = async() => {
  return "Quan"
}

getQuan()
  .then(str => {
      console.log(str);
    });
  
  (async() => {
      console.log(await getQuan())
})()



const getName = (name) => {
  return name;
};

// Async Await style

const persons = async () => {
  const personA = await getName("a");
  const personB = await getName("b");
  const personC = await getName("c");
  return [personA, personB, personC];
};

persons().then(arr => {
  console.log(arr);
});

// Promise style 
const personsPromise = () => {
  const array = [];
  getName("Quan").then(a => {
    array.push(a);
    getName("An").then(b => {
      array.push(b);
      getName("Tuan").then(c => {
        array.push(c);
      })
    })
  })
  return array;
}

personsPromise().then(array => {
  console.log(array);
})
