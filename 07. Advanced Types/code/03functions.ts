// FUNCTION OVERLOADS
// --------------------------

// The problem: Typescript doesn't understand the specific type of a return value. Then, you can't use features of the different types.
// For example: if Typescript thinks that the return value should be a "string" or a "number" you can't use length property of the type string even if you know that this value is a string

function getLength(val: string | any[]) {
  if(typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `${numberOfWords} words`; // return a string
  }

  return val.length; // return a number
}

// Typescript thinks that it's either a string or a number
const numOfWords = getLength('Does this work?'); // Typescript don't understand that will be a string
const numItems = getLength(['Sports', 'Cookies']); // Typescript don't understand that will be a number

// numOfWords.length; //! error because Typescript thinks that value should be a number


// WORKING WITH FUNCTION OVERLOADS
// -------------------------------------

// Typescript allows you to add multiple function signatures to one in the same function. 
// You have one function body but you can add multiple signatures, multiple function keywords, followed by the same name.
// Then you may define different parameter lists and tell Typescript what the return value type will be if a function is called with a specific parameter type

function getLengthOverload(val: string): string;
function getLengthOverload(val: any[]): number;
function getLengthOverload(val: string | any[]) {
  if(typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `${numberOfWords} words`; // return a string
  }

  return val.length; // return a number
}

// Typescript thinks that it's either a string or a number
const numberOfWords = getLengthOverload('Does this work?'); // Typescript understand that will be a string
const numberItems = getLengthOverload(['Sports', 'Cookies']); // Typescript understand that will be a number

numberOfWords.length; // works because Typescript knows that numberOfWords is a string