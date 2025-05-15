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
        console.log(source.path);
        // => use that to open the file locally
        return;
    }
    console.log(source.connectionUrl);
    // => to reach out to database
}
