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


// REST PARAMETERS
// --------------------

// Rest parameters merge all incoming parameters (generally the incoming list of values) into an array.

const addNumbers = (...numbers: number[]) => { // Merge all incoming input in a number a array, we can accept an unlimited amount of arguments
  return numbers.reduce((curResult, curValue) => { // reduce((currentResult, currentValue) => (), initValue) : performs an operation on every element in an array, return a result and then adds these results together
    return curResult + curValue;
  }, 0);
};

const addedNumbers = addNumbers(5, 10, 2, 3.7);
console.log(addedNumbers);


// ARRAY & OBJECT DESTRUCTURING
// -------------------------------------

// Destructuring allows to extract properties from an object or an array and assign them to variables

const theOfficeCharacters = ["Michael", "Dwight", "Jim", "Pam", "Karen", "Stanley", "Erin"];

const [name1, name2, name3, ...remainingCharacters] = theOfficeCharacters;  // Creation of 4 new variables : "name1" with the value "Michael", "name2" with the value "Dwight", ..., and "remainingCharacters" with the name remaining
console.log(name1, name2, name3, remainingCharacters);

const managerObject = {
  name: 'Michael',
  age: 45,
  post: "Regional Manager",
  experience: 15,
}

const { name: managerName, age: managerAge, post, experience } = managerObject; // Creation of 4 new variables. Here we take the value "name" of the "managerObject" and assign it in a variable called "managerName"
console.log(managerName, managerAge, post, experience);