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

function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
  console.log(target);
  console.log(ctx);
}

@logger
class Person {
  name = "Dwight";

  @autobind
  greet() {
    console.log(`Hi, I am ${this.name}`)
  }
}

const dwight = new Person();
const jim = new Person();