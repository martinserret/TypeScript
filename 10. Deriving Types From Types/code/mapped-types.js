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
