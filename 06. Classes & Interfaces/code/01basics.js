"use strict";
// FIRST CLASS
// -----------------
class User {
    name; //* Typescript specific (in JS the constructor create the properties automatically behind the scene)
    age; //* Typescript specific (in JS the constructor create the properties automatically behind the scene)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
const dwight = new User('Dwight', 40);
console.log(dwight);
// TYPESCRIPT SHORTCUT
// ------------------------
class ConciseUser {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ; //* With Typescript, other way to create properties and assign the value automatically behind the scene : use "public" or "private" before the parameters
}
;
class TypescriptUser {
    name;
    age;
    constructor(name = "John", age) {
        this.name = name;
        this.age = age;
    }
    ; //* The constructor is just a function, so you dan use all the Typescript features
}
const jim = new ConciseUser('Jim', 35);
const unknown = new TypescriptUser();
console.log(dwight, jim, unknown);
// PUBLIC, PRIVATE & PROTECTED
// -----------------------
// public: you can use public to control how a property may be accessed on the object that is created based on the class
// private: can't access property outside of the class
// protected: works like private but also makes sure that this property may be accessed in classes that inherit from this class
class PublicPrivateUser {
    name;
    age;
    hobbies = []; // can be access everywhere. Public is default here if you write nothing
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    greet() {
        console.log(`My age is ${this.age}`);
    }
}
const michael = new PublicPrivateUser("Michael", 45);
console.log(michael.hobbies);
michael.hobbies = ["Movies"];
console.log(michael.hobbies);
// michael.age = 42; //! example of error because age is private
michael.greet();
