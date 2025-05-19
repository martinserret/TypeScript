// USING TYPEOF
// ----------------------

// typeof: Javascript operator. There is also a "typeof" operator in Typescript
//  - using JS or TS "typeof" depends on where you use it
//  - JS typeof: in a place where we using JS
//  - TS typeof: in a place where we using TS


const userName = "Dwight";
let otherName = "Jim";
console.log(typeof userName); // Javascript "typeof"

type UserName = typeof userName; // Typescript "typeof" because we using it in a place where we're dealing with Typescript. Here the type of UserName is "Dwight"
type OtherName = typeof otherName; // Here the type of otherName is string because the variable otherName is a "let" so otherName can change

const noChoiceName: UserName = "Dwight"; // Can only be "Dwight"
const choiceName: OtherName = "Pamela"; // Can be any string


// TYPEOF USEFUL EXAMPLE
// ----------------------------

const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['Michael, Ryan']
};

type Settings = typeof settings; // the type Settings is automatically derived by Typescript and "typeof" and create a type object with key/value pairs.

function loadData(settings: Settings) {
  // ...
}

function saveData(s: typeof settings) { // Shorter way
  // ...
}

loadData(settings);


// TYPEOF FUNCTION EXAMPLE
// ------------------------------

function sum(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: SumFn | SubtractFn) {
  // some code...
}