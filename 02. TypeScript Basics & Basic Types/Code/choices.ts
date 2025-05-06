// ENUM (some developer try to avoid them)
//////////////////////////////////////////

enum RoleEnum {   // enum is a feature offered by Typescript. Enum is a type that only allows certain kinds of options. You create a kind of custom type that you can use
  Admin,
  Editor,
  Guest,
}; 

let userRoleEnum: RoleEnum = RoleEnum.Admin; // or userRole: Role = 0 (or 1 and 2) but less explicit

// ...

userRoleEnum = RoleEnum.Guest;

enum RoleEnumStrOption {   // You can choose any values you want 
  Admin = "Admin",
  Editor = "Editor",
  Guest = "Guest",
};


// LITERAL TYPES (MORE POPULAR)
///////////////////////////////

let userRoleLiteral: "admin" | "editor" | "guest" = "admin"; // After colon and before equal, no matter if you're using a variable or a parameter, this this is not a value but a TYPE 
// (here there are 3 types possible for the variable userRoleLiteral)

userRoleLiteral = "editor"
//! userRoleLiteral = "other" // Error because "other" is not an option for userRoleLiteral

let possibleResultsLiteral: [1 | -1, number];
possibleResultsLiteral = [-1, 10]
//! possibleResultsLiteral = [5, 10] // Error because 5 should be -1 or 1


// TYPE ALIASES & CUSTOM TYPES
//////////////////////////////

type RoleAliases = "admin" | "editor" | "guest" | "reader"; // "type" is offered by Typescript. It allows to create a custom (or type alias) type that you can use anywhere in your code  
type User = {
  name: string,
  age: number,
  role: RoleAliases,
  permissions: string[]
}

let userRoleAliases: RoleAliases = 'admin'

function access(role: RoleAliases) {
  // ...
}