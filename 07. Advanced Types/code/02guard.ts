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