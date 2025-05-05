let age: any = 36; // "any" type accepts any kind of value
let size: string | number = 198 // called union type : size is a string OR a NUMBER (you can add more | if you want others types)

// ...

age = "37";
age = false;
age = {};
age = []

size = "1m 98";
size = 199
//! size = false; // error because size is only string or number