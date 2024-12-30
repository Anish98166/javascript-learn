//split => string to Array

// join => Array to string

// let name = "harry";
// console.log(name.split(""));

// let name = ["h", "a", "r", "r", "y"];
// console.log(name.join(""));

//Filter => true or false

// let arr = ["a", "b", "c"];
// let output = arr.filter((value, index) => {
//   if (value === "c") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// filter's output's element must be inputs element.
// [1,2,3,4] => [2,4]

// let num = [1, 2, 3, 4];
// let output = num.filter((value, index) => {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let num = [1, 4, 7, 15, 17, 19, 25, 40];
// let output = num.filter((value, index) => {
//   if (value > 17) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let name = ["ram", "harry", "shyam"];
// let output = name.filter((value, index) => {
//   if (value.length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(output);

// let text = ["", "ram", 0, 1, null, undefined, false, true];
// console.log(text.filter(Boolean));
