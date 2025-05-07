// OPTIONAL VALUES
//////////////////

// Optional parameters or optional properties set up with a question mark "?"

function generateError(msg?: string) { // The question mark "?" tells Typescript that parameter is optional
  throw new Error(msg);
}

generateError();


type User = {
  name: string,
  age: number,
  role?: 'admin' | 'guest' // Here role is an optional property which may be added or not
};

const userOne: User = {
  name: "Dwight",
  age: 40,
  role: 'admin'
}

const userTwo: User = {
  name: "Pam",
  age: 35
}


// NULLISH COALESCING
/////////////////////

// "??" is a Javascript feature. Nullish coalescing checks if a value is null or undefined

let input = '';
const didProvideInput = input || false; // Check if input is falsy (null, undefined, empty string, 0 or false)
const didProvideInputNullish = input ?? false; // Check if input is null or undefined