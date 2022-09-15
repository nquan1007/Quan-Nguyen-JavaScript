// JSON syntax

const jsonNumber = '1';

const jsonBoolean = 'true';

const jsonNull = 'null';

const jsonString = '"Quan"'

const jsonArray = '["JavaScript","PHP"]';

const jsonObject = '{"name":"Quan Nguyen","age":"23"}';

console.log(JSON.parse(jsonNumber));
console.log(typeof JSON.parse(jsonNumber));

var object = JSON.parse(jsonObject);
console.log(object);

var An = {
  ...object,
  name: "An Nguyen"
}
console.log(An);

console.log(JSON.stringify(1));