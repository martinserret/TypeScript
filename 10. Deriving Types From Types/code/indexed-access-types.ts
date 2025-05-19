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
