// **********NOTES********** //


// 1) Primitive Data Types (call by value)

// 7 categories : String, Number, Boolean, Null, Undefined,    Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345262712782n


// 2) Reference Data Type/Non-primitive Data Type (Memory mein refernce directly allocate kiya jata hai)

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name: "prerna",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World"); 
}

console.log(typeof anotherId);


// ********************************************

// Stack (for Primitive Data Types)
// Heap (for Non-Primitive Data Types)

let myYoutubeName = "Crazykukidotcom"
let anotherName = myYoutubeName
anotherName = "Chai aur code"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "prerna@google.com"

console.log(userOne.email);
console.log(userTwo.email);