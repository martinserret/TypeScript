// INDEXED ACCESS TYPES
// ---------------------------

// Convenient way of storing a supp type or part of an object type in a separate alias
// To store a part of an object into a separate type : referring to that object type and using [] with the name of the property you want to extract

type AppUser = {
  name: string,
  age: number,
  permissions: {
    id: string,
    title: string,
    description: string
  }[];
};

type Perms = AppUser['permissions']



// ACCESSING ARRAY ELEMENTS WITH INDEXED ACCESS TYPES
// ----------------------------------------------------------

// You can also use it on arrays to extract the value type of the elements that are stored in the array
// You must use [number] to tell Typescript that you want to extract the type of the elements that are stored for the different INDEXES in the array

type Perm = Perms[number]; // Tells Typescript that you want to extract the type of the elements that are stored for the different indexes in the array


type Names = string[];
type Name = Names[number]; // Let Typescript look into the array type and take a look at the type of the values that will be stored in that array and then give you just that value type