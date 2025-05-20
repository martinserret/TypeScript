"use strict";
// WHAT ARE DECORATORS
// -----------------------------
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
// FIRST DECORATOR
// ----------------------------
// In JS, decorators are just functions written in a certain way, receiving a certain amount of arguments and so on.
// decorator: logger => log information about the class attached
// ECMAScript decorators 2 arguments: 
//  - target: the thing you attaching to
//  - ctx: context object that give you extra information about the thing you're attaching the decorator to. The type of ctx is ClassDecoratorContext.
function logger(target, ctx) {
    console.log("logger decorator");
    console.log(target);
    console.log(ctx);
}
let Person = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Person = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Person = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = "Dwight";
        greet() {
            console.log(`Hi, I am ${this.name}`);
        }
    };
    return Person = _classThis;
})();
