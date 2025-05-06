
// INFERRED NULL AND TYPE NARROWING
///////////////////////////////////

const inputEl = document.getElementById('user-name'); // inputEl could be an HTMLElement or null because if there is not element with id "user-name", the result is null

if(!inputEl) { // so you have to deal with the case inputEl = null. Then you have to had a condition a test it. That's called "type narrowing"
  throw new Error("Element not found!");
}

console.log(inputEl.value); // Now, typescript knows that inputEl must be only an HTMLElement (super smart !)



// FORCED NOT NULL AND OPTIONAL CHAINING
////////////////////////////////////////

const inputElement = document.getElementById('user-name')!; // Add a exclamation mark "!" in this place is a Typescript feature. 

// It tells Typescript that the code in front it could, in theory, produce null, will not yield null here in this case. (Dangerous if return null : RUNTIME ERROR)
// You should be careful with this operator because you basically disable Typescript (a part). It could be useful if you just know that something is not null.


const inputEle = document.getElementById('user-name');
console.log(inputEle?.value); // Question mark "?" (Javascript feature) tells that you know that value could be null. It's an inline check. If it's not null, try to access to the property, else not (not runtime error)


// TYPE CASTING
///////////////

// Type costing (or type assertion) is a concept of converting some type to another type withe the operator "as"

const inputElem = document.getElementById('user-name') as HTMLInputElement | null; // We telling Typescript that getElementById will return an HTMLInputElement or null

console.log(inputElem?.value); // Then we don't have an error (error because in the others versions, this was an HTMLElement that can't have value properties)