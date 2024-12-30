//Rest Operator  and Spread Operator (...)

// let { name, ...rest } = { name: "ram", age: 23, city: "bangalore" };
// console.log(name, rest);

// let sum = (...c) => {
//   //   console.log(a);
//   //   console.log(b);
//   console.log(c);
// };

// sum(1, 2, 3, 4, 7, 9);

// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a, b, c);
// Rest Operator always place at alst parameter.

//Spread Operator

//Spread Operator are wrapper opener.

// let name = ["ram", "shyam", "mohan"];
// let num = [1, 2, 3, 4, 5];

// let output = ["n9", ...name, 9, 10, "harry", ...num, 1, 2];
// console.log(output);

let info = {
  name: "ram",
  age: 23,
  city: "bangalore",
};

// let output = { ...info };

let output = { province: "bagmati", ...info, school: "trinity", name: "hari" };
console.log(output);
