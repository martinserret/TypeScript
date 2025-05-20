"use strict";
// WHAT ARE DECORATORS
// -----------------------------
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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
// USING DECORATORS TO SOLVE A COMMON PROBLEM 
// ------------------------------------------------
// The decorator autobind should solve a certain kind of problem you could sometimes encounter when working with classes and object in Javascript.
// That's a problem related to the "this" keyword and how Javascript works :
//  - for some reason I want to store a pointer to a method in a separate variable or constant (in our example : const greet = dwight.greed)
//  - this is something i might need to do in order to then pass this pointer method as an argument to another function (as a callback function for example)
//  - if now I try to execute this method, the properties of the method can't be read and I will have an error (in our example: greed() will return an error because "this.name" cannot be read)
//  - the problem is how "this" keyword works in JS, it's points to the thing on which this function is executed (in our example: greet is not directly executed on something and "this" is "undefined")
// IMPLEMENTING A DECORATOR-BASED SOLUTION AUTOBIND
// This problem can be solve with a decorator.
// autobind decorator will automatically bind the method is attached to, to the class the method belongs to.
// "addInitializer" method is a utility method provided by the ctx object to allow you to run code related to the thing (class, method, etc.) you are attaching the decorator to after this thing is done initializing
// in other words, "addInitializer" giving you access to the constructor of the class
function logger(target, ctx) {
    // executed when Javascript parsed the code and if the decorator is attached to a class => class definition (no need to create an instance)
    console.log("logger decorator");
    console.log(target);
    console.log(ctx);
    return class extends target {
        constructor(...args) {
            // executed for every instantiation of the class => class instantiation
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    };
}
function autobind(target, ctx) {
    console.log(target);
    console.log(ctx);
    ctx.addInitializer(function () {
        this[ctx.name] = this[ctx.name].bind(this);
    });
}
let Person = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    var Person = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [autobind];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Person = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = (__runInitializers(this, _instanceExtraInitializers), "Dwight");
        greet() {
            console.log(`Hi, I am ${this.name}`);
        }
    };
    return Person = _classThis;
})();
const dwight = new Person();
// autobind
const greet = dwight.greet;
greet();
