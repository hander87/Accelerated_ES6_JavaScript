// ARROW FUNCTION
function standardFunction(a) {
    return a + 5;
}
let arrowFunction = a => a + 5;

console.log('Standard function:', standardFunction(5))
console.log('Arrow function:', arrowFunction(5))

// Can also use inside other functions
setTimeout( () => console.log('Hello from timeout fn!'), 1000 )

// HOISTNING
// Declare before use
function setValue () {
    theAge = 31
}; 
let theAge;
setValue();
console.log('Hoist', theAge)


// CONST
const AGE = 31; // CONST only assigned once
// AGE = 27; 
console.log(AGE);

// Reassigniing consts holding values are allright, but not the reference it's pointing to.
const OBJ = {
    age: 31
}
console.log(OBJ)
OBJ.age = 27
console.log(OBJ)

// LET
// Let allows "Block Scoping"

let age = 31;
if (true) {
    let age = 27;
    console.log('Inside', age);
}

console.log('Outside', age);