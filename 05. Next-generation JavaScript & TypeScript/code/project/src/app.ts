// LET & CONST
// ---------------------

const userName = "Max"; // "const" can not be change
let age = 30; // "let" can be change. Similar to "var". Problem with "var": available everywhere (if you create a "var" inside a "if" condition, this "var" is available outside the "if" even if you don't go in the condition and the "var" is not define)

age = 29; 


// ARROW FUNCTIONS
// ----------------------

// Advantages : 
//  - shorter
//  - one line expression : no need curly bracket and no return
// - function with only one parameter : concise syntax

const add = (a: number, b: number) => a + b;

const button = document.querySelector('button');

if(button) {
  button.addEventListener('click', event => console.log(event))
}




// DEFAULT FUNCTION PARAMETERS
// ---------------------------------

// The default parameter(s) have to be last in the list of parameters.
// When you call a function with arguments, theses arguments are provided to the parameters in the order the parameters are defined. So if the default parameters are at the beginning, theses parameters take the value of the firsts arguments and the last parameters don't have values.

const subtract = (a: number, b: number = 1) => a + b;
console.log(subtract(5));

//! Exemple of error
// const subtractProblem = (a: number = 5, b: number) => a + b;
// console.log(subtractProblem(5));


// THE SPREAD OPERATOR (...)
// ----------------------------------

// Retrieve the data stored in arrays and objects

// Arrays are objects and objects are reference values. When we "push", we change the memory but not the address

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); // push all the elements of "hobbies" in "activeHobbies"

const oldHobbies = ['Reading', ...hobbies] // put all elements of hobbies

const person = {
  name: 'Dwight',
  age: 40
}

const copiedPointerPerson = person; // Here : just copy of the pointing in memory of the "person" object. So not a real copy of the object "person"

const copiedRealPerson = { ...person} ; // Real copy of the object "person"

