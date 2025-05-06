// ARRAY
////////

let hobbies = ["Sports", "Cookies"]; // Typescript understand that hobbies is a variable that stores an array full of string
let notes: (number | string)[]; // First way to define array types
let users: Array<(string | number)>;  // Alternative way : generic type (make same as before)

hobbies.push("Yoga");
//! hobbies.push(10); // not a string element

notes = [12, "B", 15, 9, "A"];
notes = ["C", "B", "B", "A"];
notes = [11, 16, 12];

users = [1, "Dwight", 2, "Michael"]


// TUPLE
////////

let possibleResults: [number, number] // Tuple declaration in Typescript (here, an array with exactly 2 numbers)
let multipleTypesResults: [number, string] // idem but an array with one number and one string

possibleResults = [-1, 1]
//! possibleResults = [-5, 5, 10] // Too much elements

multipleTypesResults = [10, "dix"]


// OBJECT
/////////

// Typescript automatically assigns type for each property
let user = {
  name: "Max",
  age: 38
}

user = {
  name: "Sarah",
  age: 40
}

//! Error because the age have to be a number
// user = {
//   name: "John",
//   age: "38"
// }

let newUser: {
  name: string,
  age: number | string,
  hobbies: string[],
  role: {
    description: string,
    id: number,
  }
}

newUser = {
  name: "test",
  age: "40",
  hobbies: ["Yoga", "Paper"],
  role: {
    description: "Best paper seller",
    id: 1
  }
}

//! Error because values not match with properties types
// newUser = {
//   name: 55,
//   age: 40,
//   hobbies: [false, "Paper"],
//   role: {
//     description: false,
//     id: "1"
//   }
// }


// Tricky must not be null type
let val: {} = "some text"; // In Typescript, means any value (string, number, boolean, empty object, etc.) that's not undefined or null


// FLEXIBLE OBJECTS WITH THE RECORD TYPE
////////////////////////////////////////

let data: Record<string, number | string> // Record<string, number | string> : an object with a key(string)/value(string or number) pair 
// Record type is a generic type. It's a type that is meant to work together with other types, that needs extra type information tto work correctly.
// that allows to declare an empty object (object you don't know in advance) with no value inside (just specifies the key type and the value type) (because {} means everything except null or undefined)

data = {
  entry1: 1,
  entry2: "new data"
}