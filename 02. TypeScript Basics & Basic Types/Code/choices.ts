enum Role {   // enum is a feature offered by Typescript. Enum is a type that only allows certain kinds of options. You create a kind of custom type that you can use
  Admin,
  Editor,
  Guest,
}; 

let userRole: Role = Role.Admin; // or userRole: Role = 0 (or 1 and 2) but less explicit

// ...

userRole = Role.Guest;

enum RoleStrOption {   // You can choose any values you want 
  Admin = "Admin",
  Editor = "Editor",
  Guest = "Guest",
};