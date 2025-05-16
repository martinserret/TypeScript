// A GENERIC TYPE WE ALREADY KNOW
// ---------------------------------------

let namesArray: string[] = ['Dwight', 'Jim'];  // Classis way to explicit the type: string[] = array of strings
let names: Array<string> = ['Dwight', 'Jim']; // Array<string> is a generic type (<string> is optional because Typescript infer (déduire) that the values in the array are strings)


// UNDERSTAND GENERIC TYPES
// ------------------------------------

// generic types : types that need to work together with other types. So types where multiple types need to work together in order to accurately describe a certain value type.
//  - Example : let names: Array<string> = ['Dwight', 'Jim']; => the type of this value is an array full of strings. We have 2 types working together : array and string
//  - generic type is about combinations of types and building flexible things. Array is the generic type (always the thing in front of the angle brackets) and is pretty flexible
//    because you can use this Array type to describe all kinds of arrays that contain all kinds of value types.


// CREATING & USING A GENERIC TYPE
// --------------------------------------

// Create a custom generic type with <> after your type and place the letter T (for Type) inside as a placeholder (<T>). You can add multiple placeholders if you create a more complex custom generic type
// This placeholder can use inside of the type definition and not hard coding certain parts. Doing that allow to used this custom type with some other type.

// After create the custom type, you can use it. You have to place between <> the concrete type of value you want to use (instead of "T"). 
// The benefit of using generic types is that allow to use any kind of types when you using it and not when you define it. You can simply create more flexible types.


type DataStore<T> = {
  [key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = 'Dwight';
store.isInstructor = true;
console.log(store);

let nameStore: DataStore<number> = {};
nameStore.id = 112;
console.log(nameStore);



// GENERIC FUNCTIONS & INFERENCE
// ------------------------------------

// You're not limited to building generic types. You can also build generic functions.

// The parameters could be "any" but the problem is that the return of teh function will be any too. The consequence is that Typescript doesn't have the information of type because this information is lost with "any".
// Then, you can use autocompletion to use features link to a specific type.

// To turn a function to a generic function is the same way as for a generic type ("<T>" with T as placeholder). Then place "T" as type for the parameters. 

function mergeAny(a: any, b: any) {
  return [a, b];
}

const idsAny = mergeAny(1, 2); // idsAny is "any[]" type => Typescript doesn't that the values are numbers so you can't use autocompletion

function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge(1, 2); // ids type is "number[]". Typescript is able to infer (déduire) that "merge" return an array of numbers here because it takes a look at the value types of the 2 arguments passed
ids[0].toExponential(2); // Now you have the autocompletion for number type
console.log(ids);

const idsString = merge('Dwight', 'Jim'); // ids type is "string[]". Typescript infer that the arguments are strings
console.log(idsString);



// WORKING WITH MULTIPLE GENERIC PARAMETERS
// --------------------------------------------------------

// You're not limited to just one placeholder in generic type. 
// If you use only one placeholder: all your values will have the same type
// If you use several placeholders: you can mix types 

function mergeMultiple<T, U>(a: T, b: U) {
  return [a, b];
}

const idsMultiple = mergeMultiple(1, "Dwight");  // idsMultiple type is (string | number)[]
console.log(idsMultiple);


// GENERICS & CONTRAINTS
// --------------------------------

// Sometimes you want flexibility but you don't want all kinds of values for those placeholders.
// Typescript allows you to add a so-called (soi-disant, prétendu) constraint to the placeholders with the keyword "extends"

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const merged = mergeObj({ username: "Dwight" }, { age: 38 });
console.log(merged);



// CONTRAINTS & MULTIPLE GENERIC TYPES
// ---------------------------------------------

// When you have multiple object types, it could be interesting to have multiple placeholder

function mergeObjMultiple<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const mergedMultiple = mergeObjMultiple({ username: "Dwight" }, { age: 38 });
console.log(mergedMultiple);



// WORKING WITH GENERIC CLASSES & INTERFACES
// --------------------------------------------------------

// You can also create generic classes and interfaces. 
// Same way that you create generic types or generic functions

interface Role<T> {
  // ...
}


class User<T> {
  constructor(public id: T) { }
}

const userString = new User('1')
const userNumber = new User(1)

console.log(userString)
console.log(userNumber)