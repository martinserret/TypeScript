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
// TYPE GUARDS VIA INSTANCEOF
// ---------------------------------
// We can take advantage of a specific Javascript keyword : instanceof
// instanceof allows us to check whether entity is an instance of an specific kind of object
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        // ...
    }
}
class Admin {
    constructor(permissions) { }
    scan() {
        // ...
    }
}
const user = new User("Max");
const admin = new Admin(['ban', 'restore']);
function init(entity) {
    // .join() or .scan()
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
}
