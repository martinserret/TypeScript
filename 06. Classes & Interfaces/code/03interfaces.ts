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