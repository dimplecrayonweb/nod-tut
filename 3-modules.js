// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const req = require('express/lib/request');
const name = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// console.log(data);
// sayHi('dimple')
// sayHi(name.john)
// sayHi(name.peter)