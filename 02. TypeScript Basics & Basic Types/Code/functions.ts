// FUNCTION RETURN VALUE TYPES
//////////////////////////////

function add(a: number, b:number): number { // Between parameter list and curly bracket, you can add the return value type of that function (can be omit)
  return a + b
}


// VOID TYPE
////////////

function log(message: string): void { // Simply means this function returns nothing (can be omit but important to know the concept)
  console.log(message);
}


// NEVER TYPE
/////////////

// "never" est un type spécial qui indique qu'une fonction ne retourne jamais de valeur. Cela peut être parce qu’elle : lève systématiquement une exception (throw) ou ne termine jamais (ex : boucle infinie)

// Utiliser never rend explicite le fait que la fonction ne se termine jamais normalement. Cela peut aider d'autres développeurs (ou vous-même plus tard) à comprendre que cette fonction est conçue pour interrompre le flux d'exécution normal.

// Cela permet à TypeScript de vérifier que la fonction est utilisée correctement. Par exemple, si vous essayez d'utiliser le résultat de cette fonction, TypeScript vous avertira que la fonction ne retourne jamais de valeur.

// C'est une forme de documentation intégrée qui indique clairement l'intention de la fonction.

function logAndThrow(errorMessage: string): never { // "never" is offered by Typescript.
  console.log(errorMessage);
  throw new Error(errorMessage);
}


// FUNCTIONS AS TYPES
/////////////////////

// "cb: () => void" is how to define a function type in Typescript (here we expect a function with no parameters that have no return)
// cb: () => string : cb is a function type which return a string
// cb: (a: number, b: number) => number : cb is a function type which has 2 parameters (numbers) and return a number

function performJob(cb: () => void) { // cb is a parameter which expects to get a function (functions are value in Javascript). 
  // ...
  cb();
}

function performAnotherJob(cb: (msg: string) => void) {
  cb("Job done!")
}

performAnotherJob(log); // Call the function performAnotherJob with the function parameter log

type User = {
  name: string,
  age: number,
  greet: () => string
}

let user: User = {
  name: "Dwight",
  age: 40,
  greet() {
    console.log("Sell paper...")
    return this.name + " end his task."
  } 
}

user.greet()