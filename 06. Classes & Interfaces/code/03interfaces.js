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
class AuthenticatableUser {
    email;
    password;
    userName;
    constructor(email, password, userName) {
        this.email = email;
        this.password = password;
        this.userName = userName;
    }
    login() {
        // ...
    }
    logout() {
        // ...
    }
}
// ENSURING BASE TYPES WITH INTERFACES
// ----------------------------------------
// You can use an interface as a type to force anyone to pass an object that implement the interface
function authenticate(user) {
    user.login();
}
