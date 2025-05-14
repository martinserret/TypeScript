// GETTERS
// --------------

// getter: special kind of property or method create with the keyword "get".
//  - In a getter, you must return a value. A getter is a calculated or a computed property. A property which has its value derived on the fly when it's accessed
//  - You access to getter like a property even though it's define like a method.

class UserGetter {
  constructor(private firstName: string, private lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const dwightGetter = new UserGetter("Dwight", "Schrute");
console.log(dwightGetter.fullName);


// SETTERS
// ---------------

// setter: special kind of property or method create with the keyword "set". 
//  - In a setter, you can change the value of a property and make checks or calculations before change it
//  - You access to getter like a property even though it's define like a method.

class UserSetter {
  constructor(private _firstName: string, private _lastName: string) {}

  set firstName(name: string) {
    if(name.trim() === '')
    {
      throw new Error('Invalid name');
    }

    this._firstName = name;
  }

  set lastName(name: string) {
    if(name.trim() === '')
    {
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
//  - This can especially be useful if you're building some kind of utility classes

class UserStatic {
  constructor(private _firstName: string, private _lastName: string) {}

  set firstName(name: string) {
    if(name.trim() === '')
    {
      throw new Error('Invalid name');
    }

    this._firstName = name;
  }

  set lastName(name: string) {
    if(name.trim() === '')
    {
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


// INHERITANCE
// --------------------

// inheritance: extend a class and create a relation parent/child between 2 classes
//  - The child class inherits all the properties and methods of its parent class.
//  - The child class can add its own properties and methods, and overwrite the properties and the methods of its parent class
//  - super() is a built-in function which simply ensures that the constructor of the parent class is getting called as well
//  - super is a built-in keyword that allows to access to its parent class properties or methods

class Employee extends UserStatic {
  constructor(_firstName: string, _lastName: string, public jobTitle: string) {
    super(_firstName, _lastName);
  }
  
  public work() {
    console.log("Work in progress...");
    console.log("Done !");
  }
}

const pamInheritance = new Employee("Pam", "Beesly", "Receptionist");

// Parent properties and methods
console.log(Employee.eid);
Employee.greet();

pamInheritance.firstName = "Pamela";
console.log(pamInheritance.fullName);

// Class own methods
pamInheritance.work();


// PROTECTED MODIFIER
// ---------------------------

// protected: with the modifier protected, a child class can access to an inherit property or a method but it's not possible outside this inherit class
//  - private: an inherit class can't access to the private properties and methods
//  - public: everyone can access everywhere to the public properties and methods

class UserProtected {
  constructor(private firstName: string, protected lastName: string, public age: number) {}
}

class EmployeeProtected extends UserProtected {
  constructor(firstName: string, lastName: string, age: number, private jobTitle: string) {
    super(firstName, lastName, age);
  }

  work() {
    //console.log(this.firstName); //! error because firstName is private in UserProtected class
    console.log(this.lastName); //* work because lastName is protected in UserProtected class
    console.log(this.age); //* work because age is public in UserProtected class
    console.log(this.jobTitle); //* work because jobTitle is private in this class (UserProtected)
    console.log("Work in progress...");
    console.log("Done !");
  }
}

const michaelProtected = new EmployeeProtected("Michael", "Scott", 42, "Manager")

// michaelProtected.firstName = ""; //! error because firstName is private in UserProtected class
// michaelProtected.lastName = ""; //! error because lastName is protected in UserProtected class
michaelProtected.age = 43; //* work because age is public in UserProtected class
// michaelProtected.jobTitle = ""; //! error because jobTitle is private in this class (UserProtected)

michaelProtected.work();