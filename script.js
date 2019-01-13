console.log('"ARRAY" OBJECT');

var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
console.log('inventory.find', inventory.find(isCherries)); // Find in OBJECT

let array4 = [1,2,3,4,5];
console.log('array4.find', array4.find( val => val >= 3)); // Finds val greater/equal than 3 - then STOP

let array3 = [1,2,3,4,5];
array3.fill(100, 1, 2); // 1, 2 ar optional parameters. Start and End placement
console.log('array3.fill', array3); // Fills old array with new value

let array2 = [1,2,3,4,5];
let newArray = Array.from(array2, val => val * 2); // Run function of each array value
console.log('Array.from', newArray)

let array1 = Array.of(1,2,3,4,5);
console.log('Array.of(5)', array1); // Produces array with the values

let array = Array(5);
console.log('Array(5)', array); // Produces 5 undefined array objects



console.log('"NUMBER" OBJECT');
let number1 = NaN;
let number3 = 100000000000;

console.log('Number.isNaN', Number.isNaN(number1)); // Checks if nan
console.log('Number.isFinite', Number.isFinite(number3)); // Checks if number is not infinite
console.log('Number.isInteger', Number.isInteger(number3)); // Checks if number is a number




console.log('"STRINGS" OBJECT');
let name = 'Hannes';

// Checks string with string (case sensitive)
console.log('startsWith', name.startsWith('Han'));
console.log('endsWith', name.endsWith('es'));
console.log('includes', name.includes('nn'));




console.log('"MATH" METHOD OBJECTS');

let number = -1;
// Checks positive or negatives (the minus/plus "sign") 
// Can also pass 0 or NaN
console.log('Math.sign', Math.sign(number));


let number2 = -3.78;
// Truncates and return all before decimal place
console.log('Math.trunc', Math.trunc(number2));
// Floor returns NEAREST number
console.log('Math.floor', Math.floor(number2));




console.log('"OBJECT" OBJECT');
// Merge two objects

let obj1 = {
    a: 1
}

let obj2 = {
    b: 2
}

let obj = Object.assign(obj1, obj2);

console.log('Object.assign', obj);