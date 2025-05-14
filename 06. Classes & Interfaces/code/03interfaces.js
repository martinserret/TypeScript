"use strict";
// INTERFACES
// -----------------
// INTERFACE AS OBJECT TYPES
// -----------------------------------
let user;
user = {
    email: 'test@example.com',
    password: 'abc1',
    login() {
        // reach out to a database, check credentials, create a session
    },
    logout() {
        // clear the session
    }
};
let userMerging;
userMerging = {
    email: 'test@example.com',
    password: 'abc1',
    role: 'admin',
    login() {
        // reach out to a database, check credentials, create a session
    },
    logout() {
        // clear the session
    }
};
