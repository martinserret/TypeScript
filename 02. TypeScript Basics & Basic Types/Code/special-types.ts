// NULL & UNDEFINED TYPES
/////////////////////////

// null and undefined are regular javascript feature

// undefined: signifie qu'une variable a été déclarée mais n'a pas encore été assignée de valeur. C'est la valeur par défaut pour les variables et les propriétés d'objet qui n'ont pas été initialisées.
// exemple: let x ; const obj = {} ;  => x et obj sont undefined

// null: null est une valeur assignée explicitement qui indique l'absence intentionnelle d'une valeur. C'est souvent utilisé pour indiquer qu'une variable devrait être un objet mais ne l'est pas actuellement.
// exemple: let y = null  => y est null

let a: null; // the variable "a" can be only null type (useful when combine with other type)
a = null
//! a = "Hi!" // error because a can be only null


let b: null | string;
b = "Hi!"
b = null

let c: undefined | string // the variable "c" can be undefined or a string
c = undefined
c = "Hi!"
