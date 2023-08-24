// Primitive
// 7 types
// 1)string
// 2) number 
// 3) boolean ( true or false)
// 4) null (empty)
// 5) undefined  (eg const abc;)
// 6)symbol  (to make value unique)
// 7)BigInt (big value )

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const id = symbol('123');
// const anotherId = Symbol('123')



// non primitive (reference type)
// 1)Arrays
    const heros = ["Shaktimaan" , "naagraj" , "doga "]
   

    console.log(heros);
// 2)Objects
let myObj = {
    name:"jarvis",
    age:28,
}

// 3)Functions
const myFunction = function(){
console.log("hello world");
} 
console.log(typeof scoreValue);

// call by value 

// call by reference