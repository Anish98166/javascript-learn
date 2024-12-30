// Array is a collection of values where as object is a collection of key value pairs are called properties.

// let info = {
//   name: "ram",
//   age: 20,
//   location: "kathmandu",
//   name: "harry",
// };
// // Duplicate key doesn't exist, if it exist it is override by last or below code/key.
// console.log(info.location);
// console.log(info.name);

// let info = {
//   name: "ram",
//   age: 30,
//   location: "ktm",
// };

// //get value
// console.log(info.age);

// //change value
// info.age = 40;
// console.log(info);

// //delete value
// delete info.name;
// delete info.age;
// console.log(info);

// let info = {
//   name: "ram",

//   favFruits: ["apple", "banana", "mango"],
//   location: {
//     country: "nepal",
//     province: "bagmati",
//     city: "ktm",
//   },
//   age: () => {
//     console.log("my age is 20 yrs old");
//   },
// };

// console.log(info.name);
// console.log(info.favFruits[1]);
// info.age();

//Alias

// let { name: fullName, age: Year } = {
//   fullName: "ram",
//   Year: 20,
// };
// console.log(name, age);

// let info = [
//   { name: "earphone", price: 2000 },
//   { name: "mouse", price: 500 },
//   { name: "keyboard", price: 1000 },
// ];

// find the total price of all products

// let output = info.map((value, index) => {
//   return value.price;
// });
// console.log(output);

// let total = output.reduce((previous, current) => {
//   return previous + current;
// }, 0);

// console.log(total);

// sort the array of objects based on price

// let output = info.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(output);

// convert object into array

// let info = { name: "ram", age: 20, location: "ktm" };
// let output1 = Object.keys(info);
// let output2 = Object.values(info);
// let output = Object.entries(info);
// console.log(output);
// console.log(output1);
// console.log(output2);

// convert array into object
// let info = [
//   ["name", "ram"],
//   ["age", 20],
//   ["location", "ktm"],
// ];

// let output = Object.fromEntries(info);
// console.log(output);

//Math

// console.log(Math.random()); // 0 to 1
// console.log(Math.random() * 100); // 0 to 100
// console.log(Math.ceil(1.23)); // 2
// console.log(Math.floor(1.23)); //1

// this operator

// let info = {
//   name: "ram",
//   surName: "shrestha",
//   fullName: function () {
//     console.log(this.name);
//   },
// };
// info.fullName();
