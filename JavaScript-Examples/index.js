// destructuring in js

const quan = {
  ten: 'Quan Nguyen',
  tuoi: 23,
  diachi: 'Dong Ha'
}

function printData(person) {  // printData({ten, tuoi, diachi})
  const {ten, tuoi, diachi} = person;
  console.log(ten);
  console.log(tuoi);
  console.log(diachi);
}

printData(quan)

// copy an object by values and change the value of the property in new object using Object function
const an = {};
Object.assign(an, quan, {ten: 'An Nguyen', diachi: 'Vinh Linh'});

console.log(an)

printData(an)

// use destructuring to copy an object
const tuan = {
  ...quan,
  ten: 'Tuan Hoang',
  diachi: 'phuong 2'
}

printData(tuan)

