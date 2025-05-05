let userName: string; // TypeScript specific features (type assignment or annotation)
let userAge = 38; // TypeScript no explicit assignment (type inference)

userName = 40 // Error because string assignment
userAge = "Dwight" // Error because number assignment

// Warning : value types are not TypeScript specific. Using typeof avec une variable, le type est de la variable est retourné
// The idea of enforcing types, setting types explicitly and getting type related errors at the point of time are TypeScript specific

function add(a: number, b = 5) {
  return a + b;
}

add(10)
add("10") // Error because number assignment for all parameters
add(10, 10)
add(10, "10") // Error because number assignment for all parameters