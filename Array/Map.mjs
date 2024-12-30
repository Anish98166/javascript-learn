//[] = Array
// value  =
// index = index in array always start from 0
// map function always have return keyword.

// let list = ["a", "b", "c"];
// let output = list.map((value, index) => {
//   return 5;
// });

// console.log(output);

// Use map method if both input and output are arrays and both input and outputs length are same

// [1,2,3,4] => [2,4,6,8]

// let list = [1, 2, 3, 4];
// let output = list.map((value, index) => {
//   return value * 2;
// });

// console.log(output);

// [1,2,3,4]=>[100,200,300,400]

// let text = ["my", "name", "is"];
// let output = text.map((value, index) => {
//   return value.toUpperCase();
// });
// console.log(output);

// [1,3,4,5]=> [100,300,0,500]

// let list = [1, 3, 4, 5, 6];
// let output = list.map((value, index) => {
//   if (value % 2 === 0) {
//     return value * 0;
//   } else {
//     return value * 100;
//   }
// });
// console.log(output);

// let list = ["a", "b", "c", "d"];
// let output = list.map((value, index) => {
//   return `${value}${index}`;
// });
// console.log(output);

// ["a",'n','i','s','h'] => ['A',"n",'i','s','h']

// let list = ["a", "n", "i", "s", "h"];
// let output = list.map((value, index) => {
//   if (index === 0) {
//     return value.toUpperCase();
//   } else {
//     return value;
//   }
// });

// console.log(output);
