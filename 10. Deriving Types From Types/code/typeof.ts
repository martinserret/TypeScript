// USING TYPEOF
// ----------------------

// typeof: Javascript operator. There is also a "typeof" operator in Typescript
//  - using JS or TS "typeof" depends on where you use it
//  - JS typeof: in a place where we using JS
//  - TS typeof: in a place where we using TS


const userName = "Dwight";
let otherName = "Jim";
console.log(typeof userName); // Javascript "typeof"

type UserName = typeof userName; // Typescript "typeof" because we using it in a place where we're dealing with Typescript. Here the type of UserName is "Dwight"
type OtherName = typeof otherName; // Here the type of otherName is string because the variable otherName is a "let" so otherName can change

const noChoiceName: UserName = "Dwight"; // Can only be "Dwight"
const choiceName: OtherName = "Pamela"; // Can be any string