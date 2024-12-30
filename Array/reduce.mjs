// find the sum of all element of an array

// let num = [1, 2, 3, 4, 5];
// let output = num.reduce((previous, current) => {
//   return previous + current;
// }, 0);
// console.log(output);

//syntax of reduce
// .reduce((previous, current)=>{},initial value)

// find the sum of all even elements of an array
let num = [3, 5, 7, 9, 10, 12];
let output = num
  .filter((value, index) => {
    if (value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
  .reduce((pre, cur) => {
    return pre + cur;
  }, 0);
console.log(output);

// console.log(output);
// let arr = output.reduce((pre, cur) => {
//   return pre + cur;
// }, 0);
// console.log(arr);
