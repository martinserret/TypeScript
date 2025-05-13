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