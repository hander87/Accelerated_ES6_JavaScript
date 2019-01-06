console.log('::SHARED SYMBOLS::');
// Shared symbols/id:s with Symbol.for
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log('Are they the same?', symbol1 == symbol2);

// Use case
let person = {
    name: 'Hannes'
}

function makeAge(person) {
    let ageSymbol = Symbol.for('age'); // Not accessible inside function
    person[ageSymbol] = 27;
}

makeAge(person);

console.log(person[symbol1]); // Symbol1 has same ID/KEY ("age") and therefore accessible


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