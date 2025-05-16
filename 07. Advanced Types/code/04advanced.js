"use strict";
// INDEX TYPES
// ----------------
let store = {};
store.id = 5;
store.isOpen = false;
// store.name = 'Dwight' //! Error because I can add only properties with number or boolean values
// CONSTANT TYPES
// ---------------------
// In certain situations, you might want Typescript to be a bit stricter and to not have it infer such a broad (large) type. 
// Sometimes you might want to force Typescript ton infer a bit of a more narrow type.
// You can do so by adding "as const" at the end. This is a Typescript feature
let roles = ["admin", "guest", "editor"];
// roles.push("visitor") //! Error because "roles" is readonly
const firstRole = roles[0]; // Typescript knows that the role is "admin"
const role = ["test", "kjml"];
role.push("lkjjkl");
console.log(role);
