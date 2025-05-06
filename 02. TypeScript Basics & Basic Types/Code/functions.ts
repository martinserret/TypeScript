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