// Primitive
// 7 types
// 1)string
// 2) number
// 3) boolean ( true or false)
// 4) null (empty)
// 5) undefined  (eg const abc;)
// 6)symbol  (to make value unique)
// 7)BigInt (big value )

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// const id = symbol('123');
// const anotherId = Symbol('123')

// non primitive (reference type)
// 1)Arrays
const heros = ["Shaktimaan", "naagraj", "doga "];

console.log(heros);
// 2)Objects
let myObj = {
  name: "jarvis",
  age: 28,
};

// 3)Functions
const myFunction = function () {
  console.log("hello world");
};
console.log(typeof scoreValue);

// call by value

// call by reference

// +++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive)  Heap (Non- Primitive)
let myYoutubename = "explorewithviki";

// let anotheryoutube = myYoutubename;
// anotheryoutube = "travel with viki"

// console.log(myYoutubename);
// console.log(anotheryoutube);

// let userOne = {
//     email:"user@google.com",
//     upi: "user@ybl"
// }

// let userTwo = userOne;
// userTwo.email = "travelwithviki@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);

let userOne = "user@google.com";

let userTwo = userOne;
userTwo = "travelwithviki@gmail.com";

console.log(userOne);
console.log(userTwo);
