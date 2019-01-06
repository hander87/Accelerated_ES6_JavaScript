console.log('::SYMBOLS::');
// Type = Symbol
let symbol = Symbol('debug'); // "debug" var only for id:ing/debugging
let anotherSymbol = Symbol('debug'); // "debug" var only for id:ing/debugging
console.log(symbol);

let obj = {
    name: 'hannes',
    [symbol]: 22 // Used for metadata, where output is not needed
}

console.log(obj);