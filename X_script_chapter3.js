// Note Modules are always in "strict" mode
import { keyValue as key, test } from './external.js'; // .js is only required by systemjs
import * as imported from './external.js'; // .js is only required by systemjs
import a from './external.js'; // Export "default" only has one key value. Can be named to ANYTHING

console.log('::MODULAR STRUCTURE::');
console.log(imported); // * wrapps all exported elements into an OBJECT

console.log(key);
test();
console.log(key);
console.log(a);
