// INDEX TYPES
// ----------------

// index type : Typescript feature that allow to create flexible type with []
//  - Allow to developers who work with your type to add as many properties as they want to this object as long as they have a certain shared value type
//  - The property inside the brackets [] is not actually the name of a property that exists in your object type but it's a placeholder for any amount of properties with any names
//  - It's a placeholder for a dynamic properties where we don't know the names in advance
//  - You must define which kind of value (type) this property will be of (with ":") (the type of the name of the property, mainly string but it can be Symbol or number)
//  - You must add a colon ":" to define which types of values can be stored


type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};
store.id = 5;
store.isOpen = false;
// store.name = 'Dwight' //! Error because I can add only properties with number or boolean values