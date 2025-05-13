// FIRST CLASS
// -----------------

class User {
  name: string; //* Typescript specific (in JS the constructor create the properties automatically behind the scene)
  age: number; //* Typescript specific (in JS the constructor create the properties automatically behind the scene)

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
};

const dwight = new User('Dwight', 40);
console.log(dwight);


// TYPESCRIPT SHORTCUT
// ------------------------

class ConciseUser {
  constructor(public name: string, public age: number) {}; //* With Typescript, other way to create properties and assign the value automatically behind the scene : use "public" or "private" before the parameters
};


class TypescriptUser {
  constructor(public name: string = "John", public age?: number) {}; //* The constructor is just a function, so you dan use all the Typescript features
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
  public hobbies: string[] = []; // can be access everywhere. Public is default here if you write nothing

  constructor(public name: string, private age: number) {};

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


// READ ONLY
// --------------

// readonly: simply ensure that a property can be read but can't be changed

class ReadOnlyUser {
  readonly hobbies: string[] = []; // can be access everywhere. Public is default here if you write nothing

  constructor(public name: string, private readonly age: number) {};

  greet() {
    console.log(`My age is ${this.age}`);
  }
}

const pam = new ReadOnlyUser("Pam", 28);
// pam.hobbies = ["Drawing"]; //! Example of error because "hobbies" is readonly
pam.hobbies.push("Drawing"); // Works because "push()" doesn't assign a new value to that property but mutates the existing array in memory