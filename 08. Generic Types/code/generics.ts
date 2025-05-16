// A GENERIC TYPE WE ALREADY KNOW
// ---------------------------------------

let namesArray: string[] = ['Dwight', 'Jim'];  // Classis way to explicit the type: string[] = array of strings
let names: Array<string> = ['Dwight', 'Jim']; // Array<string> is a generic type


// UNDERSTAND GENERIC TYPES
// ------------------------------------

// generic types : types that need to work together with other types. So types where multiple types need to work together in order to accurately describe a certain value type.
//  - Example : let names: Array<string> = ['Dwight', 'Jim']; => the type of this value is an array full of strings. We have 2 types working together : array and string
//  - generic type is about combinations of types and building flexible things. Array is the generic type (always the thing in front of the angle brackets) and is pretty flexible
//    because you can use this Array type to describe all kinds of arrays that contain all kinds of value types.


// CREATING & USING A GENERIC TYPE
// --------------------------------------

// Create a custom generic type with <> after your type and place the letter T (for Type) inside as a placeholder (<T>). You can add multiple placeholders if you create a more complex custom generic type
// This placeholder can use inside of the type definition and not hard coding certain parts. Doing that allow to used this custom type with some other type.

// After create the custom type, you can use it. You have to place between <> the concrete type of value you want to use (instead of "T"). 
// The benefit of using generic types is that allow to use any kind of types when you using it and not when you define it. You can simply create more flexible types.


type DataStore<T> = {
  [key: string]: T 
};

let store: DataStore<string | boolean> = {};
store.name = 'Dwight';
store.isInstructor = true;

let nameStore: DataStore<number> = {};
nameStore.id = 112; 