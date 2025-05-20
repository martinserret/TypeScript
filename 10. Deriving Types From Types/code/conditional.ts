// CONDITIONAL TYPES
// ----------------------

// conditional type is essentially a ternary expression in Typescript land that it allows you to define a type 
// that will actually be a different type depending on whether the condition  is met or not


type StringArray = string[]
let text = "text"

type GetElementType<T> = T extends any[] ? T[number] : never; // if the T is an array: the type is the type of the elements of that array, then the type is "never"
type Example1 = GetElementType<StringArray>; // return "string"
type Example2 = GetElementType<typeof text>; // return "never"

