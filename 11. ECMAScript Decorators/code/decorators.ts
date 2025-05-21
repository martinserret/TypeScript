// WHAT ARE DECORATORS
// -----------------------------

// Decorators are metaprogramming feature.
// Metaprogramming is simply code that you write that interacts with other code (other code makes up the actual application)

// Decorator start with "@" symbol before its name, can have arguments and can be attached to things :
// @Length(10, 20)
// title: string;

// The idea is that the decorator that's attached to a thing changes that thing : @Length adds validation logic to the property "title" (min and max length) 
// (@Length comes from a third party library called Class Validator)

// Decorators are a feature that allow you to write code that changes the behavior of other code.

// Typescript supports two kinds of decorators: ECMAScript & Experimental
//  - ECMAScript: official decorators are a Javascript feature
//  - Experimental: build with a different syntax and only available in Typescript. Set to "true" the flag "experimentalDecorators" in TS config file.


// TYPES OF DECORATORS
// ------------------------

// Decorators are object oriented programming feature. Decorators can only be used in conjunction with :
//  - classes (Class Decorators)
//  - methods (Method Decorators)
//  - fields (Field Decorators)
//  - getters (Getter Decorators)
//  - setters (Setter Decorators)


// FIRST DECORATOR: CLASS DECORATOR (logger)
// ----------------------------

// In JS, decorators are just functions written in a certain way, receiving a certain amount of arguments and so on.

// decorator: logger => log information about the class attached

// ECMAScript decorators 2 arguments: 
//  - target: the thing you attaching to
//  - ctx: context object that give you extra information about the thing you're attaching the decorator to. The type of ctx is ClassDecoratorContext.


// EDIT A CLASS WITH A DECORATOR (logger)
// -----------------------------------

// You can use decorators to change the thing you are attaching to them to (a class for example).

// Example: with a class, you have to returning a new class (anonymous) that's based on the old class (extends)
// To do that, you have to use a generic type that extends a class type. With Typescript, the way to interact with a class is: new () =>
// ..args: any[] means that you want to use your logger on any kind of class so I accept any amount of arguments.
// => any because I don't know in advance to which kind of class I want to attach my decorator

// extends new (...args: any[]) => any :  express that you wanna base your type "T" on some class that accepts any kind of arguments in its constructor where you then return any kind of value 


// DECORATOR CODE EXECUTION(logger)
// ----------------------------------

// class definition: executed when JS parsed the code and if the decorator is attached to a class
// class instantiation: executed for each new instantiation


// METHOD DECORATOR (autobind)
// -------------------------

// In a method decorator, the type of the parameter "target" is "Function" or "(...args: any[]) => any" because a method is a class function.
// In a method decorator, the type of the parameter "ctx" is "ClassMethodDecoratorContext"

// methods are initialized before the class initialization is done (a class is initialized once the things they have been attached to are done initializing)
// => log in method are displayed before log class

// The context object of method decorator has more information than the context of class decorator


// USING DECORATORS TO SOLVE A COMMON PROBLEM (autobind)
// ------------------------------------------------

// The decorator autobind should solve a certain kind of problem you could sometimes encounter when working with classes and object in Javascript.
// That's a problem related to the "this" keyword and how Javascript works :
//  - for some reason I want to store a pointer to a method in a separate variable or constant (in our example : const greet = dwight.greed)
//  - this is something i might need to do in order to then pass this pointer method as an argument to another function (as a callback function for example)
//  - if now I try to execute this method, the properties of the method can't be read and I will have an error (in our example: greed() will return an error because "this.name" cannot be read)
//  - the problem is how "this" keyword works in JS, it's points to the thing on which this function is executed (in our example: greet is not directly executed on something and "this" is "undefined")


// IMPLEMENTING A DECORATOR-BASED SOLUTION AUTOBIND (autobind)

// This problem can be solve with a decorator.
// autobind decorator will automatically bind the method is attached to, to the class the method belongs to.
// "addInitializer" method is a utility method provided by the ctx object to allow you to run code related to the thing (class, method, etc.) you are attaching the decorator to after this thing is done initializing
// in other words, "addInitializer" giving you access to the constructor of the class



// REPLACING METHODS WITH DECORATORS (autobind)
// -----------------------------------------

// Just as with the class decorator, the method decorator can also return an updated version of the method your are binding it to or a version that replaces the original method.



// THE FIELD DECORATOR (fieldLogger)
// ----------------------------

// A decorator that can be added to fields (property) of a class. Example : function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) 
//  - [target: undefined] the target is always "undefined" because the decorator code will be executed before the field is done initializing
//  - The context object of field decorator has more information than the context of class decorator

// In a field decorator, you can also return something to change the thing you're attaching the decorator to. To change the value you have to return a function that will be executed by JS that will be 
// executed after the field to which this decorator has been attached has been initialized. It is a function that will receive the initial value and that should return the value you wanna set instead.
// return (initialValue: any) => {}

function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
  // executed when Javascript parsed the code and if the decorator is attached to a class => class definition (no need to create an instance)
  console.log("logger decorator")
  console.log(target)
  console.log(ctx)

  return class extends target { // return a new class inside the logger function a replace the old one
    constructor(...args: any[]) {
      // executed for every instantiation of the class => class instantiation
      super(...args);
      console.log('class constructor');
      console.log(this);
    }
  }
}

function autobind(target: Function, ctx: ClassMethodDecoratorContext) { // decorator executed after the method is done initializing
  console.log(target); // target is the original method (without being tweaked)
  console.log(ctx);

  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this) // tweak the method in the object based on the class
  })

  return function (this: any) {
    console.log("Executing original function");
    target.apply(this);
  }
}

function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
  console.log("fieldLogger decorator")
  console.log(target);
  console.log(ctx);

  return (initialValue: any) => {
    console.log("Initial value from fieldLogger")
    console.log(initialValue)
    return 'Jim';
  }
}

@logger
class Person {
  @fieldLogger
  name = "Dwight";

  @autobind
  greet() {
    console.log(`Hi, I am ${this.name}`)
  }
}

const dwight = new Person();

// autobind
const greet = dwight.greet;
greet();