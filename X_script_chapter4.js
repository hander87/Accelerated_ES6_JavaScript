console.log('::WELL KNOWNED SYMBOLS::');
// Well knowned Symbols
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols

console.log(':primitiveTypes:')
let numbers = [1, 2, 3];

// Used to override default behaviour
numbers[Symbol.toPrimitive] = function() { // Symbol.toPrimitve makes a Unique ID
    return 999;
} 

console.log(numbers, +1)


console.log(':toStringTag:')
class PersonA {

}
PersonA.prototype[Symbol.toStringTag] = 'Person'; // Sets ID to class with symbols toStringTag

let personA = new PersonA();

console.log(personA);


console.log('::SHARED SYMBOLS::');
// Shared symbols/id:s with Symbol.for
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log('Are they the same?', symbol1 == symbol2);

// Use case
let person = {
    name: 'Hannes',
    age: 30 // This property will not be overswritten by Symbol with same key value
}

function makeAge(person) {
    let ageSymbol = Symbol.for('age'); // Not accessible inside function
    person[ageSymbol] = 27;
}

makeAge(person);

console.log(person[symbol1]); // Symbol1 has same ID/KEY ("age") and therefore accessible
console.log(person["age"]);


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