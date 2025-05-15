// INTERFACES
// -----------------

// It's a Typescript only features that allows you to define a type of an object and, at the same time, it's essentially a contract that can be implemented by classes
// In a interface, you only describe an objects type. You don't have the actual implementation of an object or a class, you don't have any values. Just the shape or the type of properties and methods.

// FIRST INTERFACE
// --------------------

interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}


// INTERFACE AS OBJECT TYPES
// -----------------------------------

let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc1',
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  }
}


// INTERFACES vs TYPE ALIASES + DECLARATION MERGING
// ---------------------------------------

// Why would you use an interface as object types instead of a custom object type ? It's your personal preference
//  - type: if all you want to do is define the shape of an object, create a custom object type (most cases)
//  - interface: make the same thing, both work and both can be done. There are subtle differences that can matter in certain scenarios especially with a feature called "declaration merging"

// declaration merging: when you work with interfaces, you can easily and extra properties or methods to this object type by defining the same interface again (with the same name)
//    - Mostly useful if you are working with interfaces that are coming from another file or, more commonly, from some library or anything like that (extend something you don't directly control).
//      If you want to add a property to some interface you don't directly control you could do that with "declaration merging" (you can't do that with "type")

interface AuthenticatableMerging {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableMerging {
  role: string;
}

let userMerging: AuthenticatableMerging;

userMerging = {
  email: 'test@example.com',
  password: 'abc1',
  role: 'admin',
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  }
}


// IMPLEMENTING INTERFACES
// -----------------------------

// implements: Typescript feature that works in conjunction with the "interface" keyword. The "implements" keyword forces a class to implement the structure of the interface you're implementing
//  - You could implement multiple surfaces (separating by a coma : class AuthUser implements Auth, ABC1, OtherInterface)

// you can use interfaces as contracts that force a class to have a certain shape.

interface AuthenticatableInterface {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

 class AuthenticatableUser implements AuthenticatableInterface {
  constructor(public email: string, public password: string, public userName: string){}

  login() {
    // ...
  }
  logout() {
    // ...
  }
}


// ENSURING BASE TYPES WITH INTERFACES
// ----------------------------------------

// You can use an interface as a type to force anyone to pass an object that implement the interface

function authenticate(user: AuthenticatableInterface) {
  user.login()
}