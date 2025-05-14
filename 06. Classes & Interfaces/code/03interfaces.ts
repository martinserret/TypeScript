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