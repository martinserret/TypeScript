"use strict";
// TEMPLATE LITERAL TYPES
// ----------------------------
// template literal: Javascript feature that allows to inject in a string a value store in a variable using backticks `${value}`, `{1 + 1}`
// template literal type : Typescript feature that force Typescript to create a new string literal type and injecting union types to create multiple new string literal types
//  - the syntax is the same as template literal in JS : `${type}`
const mainUserName = "Dwight";
const greeting = `Hi there, ${mainUserName}!`; // template literal in JS
