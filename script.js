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
console.log('sign', Math.sign(number));


let number2 = -3.78;
// Truncates and return all before decimal place
console.log('trunc', Math.trunc(number2));
// Floor returns NEAREST number
console.log('floor', Math.floor(number2));




console.log('"OBJECT" OBJECT');
// Merge two objects

let obj1 = {
    a: 1
}

let obj2 = {
    b: 2
}

let obj = Object.assign(obj1, obj2);

console.log('obj', obj);