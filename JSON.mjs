//JSON : Javascript Object Notation

//JSON.Stringify() : Converts a JavaScript object to a JSON string

//JSON.parse() : Converts a JSON string to a JavaScript object

let name = {
  name: "John",
  age: 30,
  city: "New York",
};

let output = JSON.stringify(name);
console.log(output);
// {"name":"John","age":30,"city":"New York"}

let name1 = JSON.parse(output);
console.log(name1);
