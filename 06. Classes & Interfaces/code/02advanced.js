"use strict";
// GETTERS
// --------------
// getter: special kind of property or method create with the keyword "get".
// In a getter, you must return a value. A getter is a calculated or a computed property. A property which has its value derived on the fly when it's accessed
// You access to getter like a property even though it's define like a method.
class UserGetter {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const dwightGetter = new UserGetter("Dwight", "Schrute");
console.log(dwightGetter.fullName);
// SETTERS
// ---------------
// setter: special kind of property or method create with the keyword "set". 
// In a setter, you can change the value of a property and make checks or calculations before change it
// You access to getter like a property even though it's define like a method.
class UserSetter {
    _firstName;
    _lastName;
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._lastName = name;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
const jimSetter = new UserSetter('Jim', 'Alpert"');
jimSetter.firstName = 'James';
jimSetter.lastName = 'Halpert';
console.log(jimSetter.fullName);
// STATIC PROPERTIES & METHODS
// -------------------------------
// static properties and method : you can access it on the class itself. Not on an object that's created based on a class, but on the class itself, before even creating an object.
// This can especially be useful if you're building some kind of utility classes
class UserStatic {
    _firstName;
    _lastName;
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._lastName = name;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    static eid = "USER";
    static greet() {
        console.log("Hello !");
    }
}
console.log(UserStatic.eid); // None object created here but I can call the properties "eid"
UserStatic.greet(); // None object created here but I can call the method "greet"
