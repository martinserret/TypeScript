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



// READONLY TYPES & OPTIONAL MAPPING
// -------------------------------------------

// mapped-types allow you to, for example, make properties optional event though if they're not optional in the original type you're mapping from
// They allow you to make properties non-optional if they have been optional before

// - properties non-optional become optional: add a question mark in the mapping => [key in keyof T]?: number
//    You can also make your type properties optional with adding a question mark
// - properties optional become non-optional: add a minus question mark "-?" Typescript feature in the mapping => [key in keyof T]-?: number

// -?: removing the optional flag when working with mapped types

// - You can make properties read only when working with mapped types: readonly [key in keyof T]?: number
// - You can also remove the read only flag when working with mapped types: -readonly [key in keyof T]?: number

// read only: property or method read only can't be overwritten once it has been defined


// NON-OPTIONAL TO OPTIONAL
type ResultsOptional<T> = {
  [key in keyof T]?: number // Properties are now optional (because of the mapping)
};

let mathResultsOptional: ResultsOptional<Operations> = { // Allow to use only one property
  add: mathOperations.add(5, 10)
};



// OPTIONAL TO NON-OPTIONAL
type OperationsOptional = {
  add?: (a: number, b: number) => number,
  subtract?: (a: number, b: number) => number
};

type ResultsNonOptional<T> = {
  [key in keyof T]-?: number // Properties are now non-optional (because of the mapping)
};

let mathResultsNonOptional: ResultsNonOptional<OperationsOptional> = { // All the properties must be used
  add: mathOperations.add(5, 10),
  subtract: mathOperations.subtract(44, 8)
};


// READ ONLY MAPPED-TYPE
type ResultsReadOnly<T> = {
  readonly [key in keyof T]?: number // Properties are now read only
};

let mathResultsReadOnly: ResultsReadOnly<Operations> = { // All the properties must be used
  add: mathOperations.add(5, 10),
  subtract: mathOperations.subtract(44, 8)
};

// mathResultsReadOnly.add = 10; //! Error because read only property


// READ ONLY TYPE
type OperationsReadOnly = {
  readonly add: (a: number, b: number) => number,
  readonly subtract: (a: number, b: number) => number
};

type ResultsRemoveReadOnly<T> = {
  -readonly [key in keyof T]?: number // Properties are now read only
};

let mathResultsRemoveReadOnly: ResultsRemoveReadOnly<OperationsReadOnly> = { // All the properties must be used
  add: mathOperations.add(5, 10),
  subtract: mathOperations.subtract(44, 8)
};

mathResultsRemoveReadOnly.add = 10; // No error because read only flag is removed