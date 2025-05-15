// TYPE GUARDS
// ------------------

// A type guard is a check that ensures that the proper piece of code is executed depending on which kind of type we get.

type FileSource = { path: string };
const fileSource: FileSource = {
  path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + read file OR reach out to database server

  if('path' in source) {
    console.log(source.path); // Typescript understand that the source is FileSource
    // => use that to open the file locally
    return;
  }

  console.log(source.connectionUrl); // Typescript understand that the source is DBSource
  // => to reach out to database
}


// DISCRIMINATED UNIONS
// ----------------------------

// The problem with checking the properties of a type is that the name of that properties might be changed in the futur.
// Discriminated union pattern is to add a shared property which exists in both types (combined type) like "type" for example. Use a literal type feature to specific a string.

type FileSourceDiscriminated = { type: 'file', path: string };
const fileSourceDiscriminated: FileSourceDiscriminated = {
  type: 'file',
  path: 'some/path/to/file.csv',
};

type DBSourceDiscriminated = {  type: 'db', connectionUrl: string };
const dbSourceDiscriminated: DBSourceDiscriminated = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type SourceDiscriminated = FileSourceDiscriminated | DBSourceDiscriminated;

function loadDataDiscriminated(source: SourceDiscriminated) {
  // Open + read file OR reach out to database server

  if(source.type === 'file') {
    console.log(source.path); // Typescript understand that the source is FileSourceDiscriminated
    // => use that to open the file locally
    return;
  }

  console.log(source.connectionUrl); // Typescript understand that the source is DBSourceDiscriminated
  // => to reach out to database
}


// TYPE GUARDS VIA INSTANCEOF
// ---------------------------------

// We can take advantage of a specific Javascript keyword : instanceof
// instanceof allows us to check whether entity is an instance of an specific kind of object



class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User("Max");
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  // .join() or .scan()

  if(entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}


// OUTSOURCING TYPE GUARDS & USING TYPE PREDICATES
// ---------------------------------------------------------

// When you create a function that check a type, Typescript doesn't return just a boolean but a type predicate. 
// It is a boolean under the hood, but it is a boolean with "extra information" attached. 
// Typescript understand that : if this function returns true then the value passed in argument has a specific type.

function isFile(source: SourceDiscriminated) {
  return source.type === 'file'
}

function loadDataOutsource(source: SourceDiscriminated) {
  // Open + read file OR reach out to database server

  if(isFile(source)) {
    console.log(source.path); // Typescript understand that the source is FileSourceDiscriminated
    // => use that to open the file locally
    return;
  }

  console.log(source.connectionUrl); // Typescript understand that the source is DBSourceDiscriminated
  // => to reach out to database
}