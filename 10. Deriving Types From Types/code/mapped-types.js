"use strict";
// MAPPED TYPES
// -------------------
let mathOperations = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
};
let mathResults = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(2, 1),
};
let mathResultsOptional = {
    add: mathOperations.add(5, 10)
};
let mathResultsNonOptional = {
    add: mathOperations.add(5, 10),
    subtract: mathOperations.subtract(44, 8)
};
let mathResultsReadOnly = {
    add: mathOperations.add(5, 10),
    subtract: mathOperations.subtract(44, 8)
};
let mathResultsRemoveReadOnly = {
    add: mathOperations.add(5, 10),
    subtract: mathOperations.subtract(44, 8)
};
mathResultsRemoveReadOnly.add = 10; // No error because read only flag is removed
