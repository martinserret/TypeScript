// A FIRST CLASS DECORATOR (Logger)
// ----------------------------

// In tsconfig.json, uncomment "experimentalDecorators": true"
// First decorator: class decorator
// Reminder:
//  - decorator is in the end just a function that you apply to something.
//  - decorator is executed when the class is defined, so before the class is instantiate

// Difference with ECMAScript Decorator
//  - decorator has only 1 argument: target (the name can also be constructor)
//  - target type for a class is Function

function Logger(target: Function) {
  console.log("Logging...")
  console.log(target)
}

@Logger
class Person {
  name = "Dwight"

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);
