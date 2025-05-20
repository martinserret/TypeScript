// CONDITIONAL TYPES
// ----------------------

// conditional type is essentially a ternary expression in Typescript land that it allows you to define a type 
// that will actually be a different type depending on whether the condition  is met or not


type StringArray = string[]
let text = "text"

type GetElementType<T> = T extends any[] ? T[number] : never; // if the T is an array: the type is the type of the elements of that array, then the type is "never"
type Example1 = GetElementType<StringArray>; // return "string"
type Example2 = GetElementType<typeof text>; // return "never"


// CONDITIONAL TYPES EXAMPLE
// -----------------------------------

type FullnamePerson = { firstName: string, lastName: string } // FullnamePerson is a type object with a firstName and a lastName
type FullnameOrNothing<T> = T extends FullnamePerson ? string : never // If T is an FullnamePerson object then return "string" else return never

function getFullname<T extends object>(person: T): FullnameOrNothing<T> {
  if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
    return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
  }

  throw new Error('No first name and/or last name found.');
}

const name1 = getFullname({});
const name2 = getFullname({ firstName: "Dwight", lastName: "Schrute" });