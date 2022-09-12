// 1. while loops
const list = ["a", "b", "c"];
let i = 0;
while (i < list.length) {
  console.log(list[i]); //value
  console.log(i); //index
  i = i + 1;
}

// 2. do..while loops
const list2 = ["a2", "b2", "c2"];
let i2 = 0;
do {
  console.log(list2[i2]); //value
  console.log(i2); //index
  i2 = i2 + 1;
} while (i2 < list.length);

// 3. for loops
const list3 = ["a3", "b3", "c3"];
for (let i = 0; i < list3.length; i++) {
  console.log(list3[i]); //value
  console.log(i); //index
}

// 4. for..of loops
const list4 = ["a4", "b4", "c4"];
for (const value of list4) {
  console.log(value); //value
}
