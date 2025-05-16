"use strict";
// A GENERIC TYPE WE ALREADY KNOW
// ---------------------------------------
let namesArray = ['Dwight', 'Jim']; // Classis way to explicit the type: string[] = array of strings
let names = ['Dwight', 'Jim']; // Array<string> is a generic type
// UNDERSTAND GENERIC TYPES
// ------------------------------------
// generic types : types that need to work together with other types. So types where multiple types need to work together in order to accurately describe a certain value type.
//  - Example : let names: Array<string> = ['Dwight', 'Jim']; => the type of this value is an array full of strings. We have 2 types working together : array and string
//  - generic type is about combinations of types and building flexible things. Array is the generic type (always the thing in front of the angle brackets) and is pretty flexible
//    because you can use this Array type to describe all kinds of arrays that contain all kinds of value types.
