// LET & CONST
// ---------------------

const userName = "Max"; // "const" can not be change
let age = 30; // "let" can be change. Similar to "var". Problem with "var": available everywhere (if you create a "var" inside a "if" condition, this "var" is available outside the "if" even if you don't go in the condition and the "var" is not define)

age = 29; 


// ARROW FUNCTIONS
// ----------------------

const add = (a: number, b: number) => a + b;

const button = document.querySelector('button');

if(button) {
  button.addEventListener('click', event => console.log(event))
}


// Advantages : 
//  - shorter
//  - one line expression : no need curly bracket and no return
// - function with only one parameter : concise syntax
