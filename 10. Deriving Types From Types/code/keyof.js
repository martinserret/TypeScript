"use strict";
// EXTRACTING KEYS WITH KEYOF
// ---------------------------------
let validKey; // "validKey" ne peut prendre que les valeurs des keys définies dans User
validKey = 'name';
validKey = 'age';
// KEYOF USEFUL EXAMPLE
// -------------------------
// In this example, we create a function that check if a value stored in an object are not "undefined" or "null"
// To retrieve the value of the object, we only want keys that exist in that object (first parameter) => keyof operator
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.');
    }
    return val;
}
const user = { name: 'Dwight', age: 35 };
const val = getProp(user, 'age'); // The second parameter can only be a string which is one of the two keys we have in "user"
const data = { id: 1, isStored: false, values: [1, -15, 7] };
const dataVal = getProp(data, 'isStored'); // The second parameter can only be a string which is one of the keys we have in "user"
