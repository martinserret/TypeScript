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
    console.log(source.path);
    // => use that to open the file locally
    return;
  }

  console.log(source.connectionUrl);
  // => to reach out to database
}