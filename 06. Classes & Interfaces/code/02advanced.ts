// GETTERS
// --------------

// getter: special kind of property or method create with the keyword "get".
// In a getter, you must return a value. A getter is a calculated or a computed property. A property which has its value derived on the fly when it's accessed
// You access to getter like a property even though it's define like a method.

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
// In a setter, you can change the value of a property and make checks or calculations before change it
// You access to getter like a property even though it's define like a method.

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

