import {compose, pipe} from 'lodash/fp'

// function pressLike() {
//   return console.log("Thank you!");
// }

// let pL = pressLike // Assigning the function to the variable
// pL()
// pressLike()

// Functions as Arguments
// function sayThanks() {
//   return "Thank you Buddy!";
// }

// function greeting(fn){
//   console.log(fn());
// }

// greeting(sayThanks);

// Higher Order function
// function thanks() {
//   return function() {
//     console.log("nandri!");
//   }
// }

// let fn = thanks();
// let message = fn();

// Task operation using normal flow
let input = "  Suprise  ";
let output = "<div>"+ input.trim() +"</div>";
console.log(output);

// Task operation using functional programming
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();
// The below code is called as Functional Composition
let result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);

// Lodash is a lib which has utilities created for functional programming
let transform = compose(wrapInDiv, toLowerCase, trim);
result = transform(input);
console.log(result);

// Here, in the above code, we have a catch, i.e., we need perform the operation fom R -> L.
// When we use pipe, we can go operation wise.
transform = pipe(trim, toLowerCase, wrapInDiv);
result = transform(input);
console.log(result);

// We can make the functional composition code using the Lodash library.
// Pipe / Compose should take function as input.

// Let us check the Currying Technique
function add(a, b) {
  return a + b;
}
console.log(add(3, 2));

function add1(a) {
  return function (b) {
    return a + b;
  }
}

const x = add1(5);
console.log(x);
console.log(x(5));

// The above code can be rewritten in Currying techique as below.
console.log(add1(10)(10));

// The above code can be written as arrow function.
const add2 = a => b => a+b;
console.log(add2(20)(20));


// Generic solution using Currying Technique
const wrap = type => str => `<${type}>${str}</${type}>`;
transform = pipe(trim, toLowerCase, wrap("div"));
result = transform(input);
console.log(result);


// Pure Function - When we send an argument to the function and if its
// result is same argument then its pure function

// The below code is impure function. Becuase, the random() function 
// always returns different values
function randomNumber(number) {
  return number * Math.random();
}

// The below code is also impure function. Becuase, the minAge is a
// global variable and its value, if its keep of change, then the 
// age value also changes
let minAge;
function isEligible(age) {
  return age > minAge;
}

// Impure Function -> Pure Function
function randomNumber1(number) {
  return number * 3;
}

function isEligible1(age, minAge) {
  return age > minAge;
}

// Immutability
const person = {
  name: "John",
  address : {
    city: "Chn",
    state: "TN"
  }
}

console.log(person.name);

person.name = "Alex"

console.log(person.name);

const updated = {
  ...person, name: "Erick"
}

console.log(person);
console.log(updated);

const updated1 = {
  ...person, address: {
    ...person.address,
    state: "Blr"
  },
  name: "Jenni"
}

console.log(person);
console.log(updated1);
