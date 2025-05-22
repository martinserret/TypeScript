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


@Logger('Logging - person')
@WithTemplate("<h1>My person object </h1>", "app")
class Person {
  name = "Dwight"

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);



// DIVING INTO PROPERTY DECORATORS (Log)
// -------------------------------------

// We can use decorators with properties
//  - 2 arguments: target and propertyName
//  - execute when class definition is registered by JS


// ACCESSOR, METHOD & PARAMETER DECORATORS
// -------------------------------------

// We can use decorators with accessors :
//  - 3 arguments: target, name and descriptor (PropertyDescriptor)

// We can use decorators with methods :
//  - 3 arguments: target, name and descriptor (PropertyDescriptor)

// We can use decorators with parameters :
//  - 3 arguments: target, name (of the method where the parameter is used) and position of this argument (number)


// WHEN DO DECORATORS EXECUTE
// --------------------------------

// - First of all, they're all running without be instantiating. 
// - They're all executed when you defined the class they are linked to



function Log(target: any, propertyName: string | Symbol) {
  console.log('');
  console.log('PROPERTY DECORATOR');
  console.log(target);
  console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('');
  console.log('ACCESSOR DECORATOR');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
  console.log('');
  console.log('METHOD DECORATOR');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log('');
  console.log('PARAMETER DECORATOR');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive")
    }
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Keyboard', 55);



// RETURNING (AND CHANGING) A CLASS IN A CLASS DECORATOR
// ----------------------------------------------------------------

// Inside a decorator function, you can return something :
//  - In a class decorator you can return a new constructor function which will replace the old one 
//  - This new constructor replace the old one. That allow us to add some extra logic
//  - This new constructor run when the class is instantiated (not defined)

// The decorator function should be a generic function that extends a constructor function with a new special type with any kind of arguments will produce an object 
// with a "name" property which will be of type string


function WithTemplate2(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY 2");
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor { // new class based on the original constructor function (keep all the properties)
      constructor(..._: any[]) {
        super();

        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent += this.name // Here we access to the name of the extends constructor
        }
      }
    }
  }
}

@WithTemplate2("<h1>My person object </h1>", "app")
class Person2 {
  name = "Jim"

  constructor() {
    console.log("Creating person object...");
  }
}

const person2 = new Person2();
console.log(person2);