"use strict";
// A GENERIC TYPE WE ALREADY KNOW
// ---------------------------------------
let namesArray = ['Dwight', 'Jim']; // Classis way to explicit the type: string[] = array of strings
let names = ['Dwight', 'Jim']; // Array<string> is a generic type (<string> is optional because Typescript infer (déduire) that the values in the array are strings)
let store = {};
store.name = 'Dwight';
store.isInstructor = true;
let nameStore = {};
nameStore.id = 112;
// GENERIC FUNCTIONS & INFERENCE
// ------------------------------------
// You're not limited to building generic types. You can also build generic functions.
// The parameters could be "any" but the problem is that the return of teh function will be any too. The consequence is that Typescript doesn't have the information of type because this information is lost with "any".
// Then, you can use autocompletion to use features link to a specific type.
// To turn a function to a generic function is the same way as for a generic type ("<T>" with T as placeholder). Then place "T" as type for the parameters. 
function mergeAny(a, b) {
    return [a, b];
}
const idsAny = mergeAny(1, 2); // idsAny is "any[]" type => Typescript doesn't that the values are numbers so you can't use autocompletion
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2); // ids type is "number[]". Typescript is able to infer (déduire) that "merge" return an array of numbers here because it takes a look at the value types of the 2 arguments passed
ids[0].toExponential(2); // Now you have the autocompletion for number type
const idsString = merge('Dwight', 'Jim'); // ids type is "string[]". Typescript infer that the arguments are strings
// WORKING WITH MULTIPLE GENERIC PARAMETERS
// --------------------------------------------------------
// You're not limited to just one placeholder in generic type. 
// If you use only one placeholder: all your values will have the same type
// If you use several placeholders: you can mix types 
function mergeMultiple(a, b) {
    return [a, b];
}
const idsMultiple = mergeMultiple(1, "Dwight"); // idsMultiple type is (string | number)[]
