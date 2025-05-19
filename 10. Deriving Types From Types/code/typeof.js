"use strict";
// USING TYPEOF
// ----------------------
// typeof: Javascript operator. There is also a "typeof" operator in Typescript
//  - using JS or TS "typeof" depends on where you use it
//  - JS typeof: in a place where we using JS
//  - TS typeof: in a place where we using TS
const userName = "Dwight";
let otherName = "Jim";
console.log(typeof userName); // Javascript "typeof"
const noChoiceName = "Dwight"; // Can only be "Dwight"
const choiceName = "Pamela"; // Can be any string
// TYPEOF USEFUL EXAMPLE
// ----------------------------
const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['Michael, Ryan']
};
function loadData(settings) {
    // ...
}
function saveData(s) {
    // ...
}
loadData(settings);
// TYPEOF FUNCTION EXAMPLE
// ------------------------------
function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function performMathAction(cb) {
    // some code...
}
