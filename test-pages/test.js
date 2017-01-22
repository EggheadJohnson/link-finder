"use strict";
let linkFinder = require('../index');

if (!process.argv[2]) return new Error("No file specified, a-hole");

linkFinder.returnsArray(process.argv[2], (err, arr) => {
    console.log(arr);
});


// process.argv.forEach((arg, idx) => {
//     console.log(idx, arg);
// })
