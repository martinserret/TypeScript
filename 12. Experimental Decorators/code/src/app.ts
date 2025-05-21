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


// BUILDING MORE USEFUL DECORATORS (WithTemplate)
// ------------------------------------

// if you don't use an argument in a function, you can use the symbol "_" to tell Typescript : "I know I get this argument but I don't need it"
// WithTemplate decorator: allow to add html element in your html file by passing an html id (here h1 element where we add the name of the Person object)


// ADDING MULTIPLE DECORATOR
// -------------------------------

// You can add more than one decorator to a class, a function, etc.
// Order of execution : bottom up //! we talk about decorator functions inside the factory
//  - @WithTemplate first
//  - @Logger second

// The decorator factories run earlier :
//  - decorator factory TEMPLATE
//  - then decorator LOGGER
//  - then the decorator function inside the decorator factory TEMPLATE
//  - then the decorator function inside the decorator factory LOGGER



function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (target: Function) {
    console.log(logString)
    console.log(target)
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor(); // here constructor is the class Person
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent += p.name
    }
  }
}


@Logger('LOGGING - PERSON')
@WithTemplate("<h1>My person object </h1>", "app")
class Person {
  name = "Dwight"

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);
