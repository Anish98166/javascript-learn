// let i = 1;

// for (i = 1; i < 5; i = i + 1) {
//   console.log(i);
// }

// i = 1 : initialization : the initialization only runs at first
// i < 5 : condition : until the condition is true/ or meet its requirement
// i = i + 1 : increment / after thought : condition is executed until the loop body is executed.

let arr = [1, 2, 3, 4, 5];

// arr.forEach((value, index) => {
//   console.log(value * 2);
// });

let output = arr.map((value, index) => {
  return value * 2;
});
console.log(output);
