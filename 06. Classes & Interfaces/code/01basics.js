"use strict";
class User {
    name; //* Typescript specific (in JS the constructor create the properties automatically behind the scene)
    age; //* Typescript specific (in JS the constructor create the properties automatically behind the scene)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class ConciseUser {
    name;
    age;
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    ; //* >ith Typescript, other way to create properties and assign the value automatically behind the scene : use "public" or "private" before the parameters
}
;
const dwight = new User('Dwight', 40);
const jim = new ConciseUser('Jim', 35);
console.log(dwight, jim);
