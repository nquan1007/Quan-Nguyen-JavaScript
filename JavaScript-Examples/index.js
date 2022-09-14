// map, filter, reduce

const numberArray = [1, 2, 3, 4, 5, 6, 7];

const mapArray = numberArray.map(number => number*3);
console.log(mapArray);

const filterArray = mapArray.filter(number => number % 2 != 0);
console.log(filterArray);

const sum = filterArray.reduce((sum, number) => sum += number, 0);
console.log(sum);

