//set
let num = [2, 3, 4, 1, 2, 3, 4, 5, 2, 3, 4, 7, 8, 9, 10];
console.log(num);
let output = [...new Set(num)];
console.log(output);

let name = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
];
let output1 = [...new Set(name)];
console.log(output1);
