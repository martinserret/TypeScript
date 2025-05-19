// EXTRACTING KEYS WITH KEYOF
// ---------------------------------

// keyof: Typescript feature. Opérateur qui permet de créer un type qui représente toutes les clés d'un objet sous forme de littéraux de type. 
//  - "keyof" peut être utilisé pour obtenir un type qui est l'union de toutes les clés de cet objet.

type User = { name: string, age: number };
type UserKeys = keyof User;

let validKey: UserKeys; // "validKey" ne peut prendre que les valeurs des keys définies dans User

validKey = 'name';
validKey = 'age';