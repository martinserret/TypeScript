"use strict";
// TYPE GUARDS
// ------------------
const fileSource = {
    path: 'some/path/to/file.csv',
};
const dbSource = {
    connectionUrl: 'some-connection-url',
};
function loadData(source) {
    // Open + read file OR reach out to database server
    if ('path' in source) {
        console.log(source.path); // Typescript understand that the source is FileSource
        // => use that to open the file locally
        return;
    }
    console.log(source.connectionUrl); // Typescript understand that the source is DBSource
    // => to reach out to database
}
const fileSourceDiscriminated = {
    type: 'file',
    path: 'some/path/to/file.csv',
};
const dbSourceDiscriminated = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};
function loadDataDiscriminated(source) {
    // Open + read file OR reach out to database server
    if (source.type === 'file') {
        console.log(source.path); // Typescript understand that the source is FileSourceDiscriminated
        // => use that to open the file locally
        return;
    }
    console.log(source.connectionUrl); // Typescript understand that the source is DBSourceDiscriminated
    // => to reach out to database
}
