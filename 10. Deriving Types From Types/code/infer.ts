// INFER KEYWORD
// ---------------------

// infer: allow to retrieve the return value type of a function
//  - typeof: return the entire function type
//  - "infer" need to be used together with the conditional type feature
//  - the type must be a generic type
//  - infer can be used in a condition to extract some extra information, some extra type to return the manipulated type

// ...args: group all the parameters received by a function into one single array

function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add; // entire function type
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never
// T extends (...args: any[]) => infer RV: if the type of T is some function, whatever are the arguments => return RV = the return value type
// (...args: any[]): ...args put all the arguments into an array. This array type is any.

type AddFnReturnValueType = ReturnValueType<AddFn>;

