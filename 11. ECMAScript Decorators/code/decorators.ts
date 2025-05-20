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


// FIRST DECORATOR
// ----------------------------

// In JS, decorators are just functions written in a certain way, receiving a certain amount of arguments and so on.

// decorator: logger => log information about the class attached

// ECMAScript decorators 2 arguments: 
//  - target: the thing you attaching to
//  - ctx: context object that give you extra information about the thing you're attaching the decorator to. The type of ctx is ClassDecoratorContext.

function logger(target: any, ctx: ClassDecoratorContext) {
  console.log("logger decorator")
  console.log(target)
  console.log(ctx)
}

@logger
class Person {
  name = "Dwight";

  greet() {
    console.log(`Hi, I am ${this.name}`)
  }
}