class User {
  name: string; //* Typescript specific (in JS the constructor create the properties automatically behind the scene)
  age: number; //* Typescript specific (in JS the constructor create the properties automatically behind the scene)

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
};

class ConciseUser {
  constructor(public name: string, public age: number = 0) {}; //* With Typescript, other way to create properties and assign the value automatically behind the scene : use "public" or "private" before the parameters
};

class TypescriptUser {
  constructor(public name: string = "John", public age?: number) {}; //* The constructor is just a function, so you dan use all the Typescript features
}

const dwight = new User('Dwight', 40);
const jim = new ConciseUser('Jim', 35);
const unknown = new TypescriptUser();

console.log(dwight, jim, unknown);