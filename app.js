// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json - manifest file (stores important info about prject/package)
// manual approach (create package.json in root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash'); // Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

const  items = [1, [2, [3, [4]]]];

const newItem = _.flattenDepth(items ,2);//This parameter holds the array that need to be flatten.  This parameter holds the maximum recursion depth.
const newItem2 = _.flattenDeep(items); // This method returns the new flattened array

console.log(newItem);
console.log(newItem2);


// git init