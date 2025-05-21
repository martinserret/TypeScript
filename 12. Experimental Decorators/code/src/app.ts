// A FIRST CLASS DECORATOR (return function inside Logger)
// ----------------------------

// In tsconfig.json, uncomment "experimentalDecorators": true"
// First decorator: class decorator
// Reminder:
//  - decorator is in the end just a function that you apply to something.
//  - decorator is executed when the class is defined, so before the class is instantiate

// Difference with ECMAScript Decorator
//  - decorator has only 1 argument: target (the name can also be constructor)
//  - target type for a class is Function


// WORKING WITH DECORATOR FACTORIES (Logger)
// ----------------------------------

// decorator factory : return a decorator function but allows us to configure it when we assign it as a decorator to something
//  - a decorator factory accept arguments and pass it to decorator functions that it execute
//  - then we you call the decorator factory, you can pass customize values which will be used by inner returned decorator function

function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString)
    console.log(target)
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = "Dwight"

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);
