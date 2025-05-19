// MAPPED TYPES
// -------------------

// Way of converting one object type to another kind of object type.
// Instead of manually defining an object type, you can turn this type into a generic type and add dynamic properties properties to this object type by basing them on the property names of some other object type.
// [Key in keyof T] :
//  - "Key": new placeholder (not defined before)
//  - "keyof": get all the keys, all the property of the placeholder.
//  - "in": Typescript feature. go through all those keys and map them to keys in the object type

// We simply add all the keys to an new object type

// mapped-type: take all the properties of some other object type and add them with a clearly defined value type to a new object type

type Operations = {
  add: (a: number, b: number) => number,
  subtract: (a: number, b: number) => number
};

type Results<T> = {
  [Key in keyof T]: number // We add the same keys that we got in this incoming object type
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
}

let mathResults: Results<Operations> = { // This object can only use the Operations type (that we mapped in Results)
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(2, 1),
}