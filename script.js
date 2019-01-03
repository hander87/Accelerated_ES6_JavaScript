// DESTRUCTURING OBJECTS
// Same tricks are valid for DESTRUCTURING ARRAYS
let obj2 = {
    name3: 'Hannes',
    age3: 31,
    greet2: function() {
        console.log('Hellooo Obj!');
    }
};
let {name3, age3} = obj2;

console.log('DESTRUCTURING OBJECTS');
console.log(name3, age3);

// However, objects are deconstructured by NAME - not position, like array
let {name4, greet2} = obj2;
// let {name4, , greet2} = obj2; <- Cannot be left blank like this
greet2();

// Giving aliases works to
let {name5, greet2: yo} = obj2;
yo();


// DESTRUCTURING ARRAYS
// Quick way of extracting values from array and assign them
// Can also be used with spread operator
// And have default values
let numbers2 = [ 1,2,3,4 ];
let [ a = "Default", b, ...c ] = numbers2;

console.log('DESTRUCTURING ARRAYS');
console.log('a is ' + a);
console.log('b is ' + b);
console.log('c is a new array: ' + c);

// Can also easily swap values
let a1 = 5;
let b1 = 10;
console.log("Before values: " + a1,b1);
[a1,b1] = [b1,a1];
console.log("Swapped values: " + a1,b1);

// Can also pull "blank" values
let [a2, ,c2] = numbers2;
console.log("Blank values: ", a2 ,c2)


// TEMPLATE LITERALS
// Using Backticks
let name2 = 'Hannes';

let desc = `
Hello! I'm ${name2 + '!!!!'},
Can also be escaped like so: \${name2 + '!!!!'},
Goodbye
`;
console.log('TEMPLATE LITERALS', desc);


// FOR OF LOOP
// New in ES6
// Shorter way of looping
let testResults = [1.12, 23.3, 2.24];

for( let result of testResults ) {
    console.log('FOR OF LOOP', result);
}


// SPREAD OPERATOR
// "Max" function expects lists of numbers - not an array
// Spread operator splits up array into a list
let numbers = [ 1,2,3,4,5 ];
console.log( 'numbers', numbers )
console.log( '...numbers', ...numbers )

console.log('Math.max(...numbers)', Math.max(...numbers));
console.log('Math.max(numbers)', Math.max(numbers));


// REST OPERATOR
// Solves issue of using unknown number of values
// "..." = Rest operator

function sumUp(...toAdd) {
    console.log('toAdd values are now in array', toAdd);
    let result = 0;
    for ( let i = 0; i < toAdd.length; i++ ) {
        result += toAdd[i];
    }
    return result;
}
console.log(
    'REST OPERATOR: sumUp',
    sumUp(100, 20, 10, 14, 5, 5, 5, "string heh") // These nr of values are "unknown"
)


// OBJECT LITERALS
// Takes values from surrounding values
let name1 = 'Hannes';
let age1 = 31;

// Assigning property names
let assignKey = 'The Key'

let obj = {
    name1: 'Emma',
    age1,
    [assignKey]: 1,
    greet() {
        console.log('Hello ' + name1)
    },
    "greet me"() {
        console.log('Hello ' + 'You')
    }
}
obj.greet();
obj["greet me"]();
console.log('Object literals:', obj, obj[assignKey])


// DEFAULT VALUES
function isEqualTo(number = 10, compare = number) {
    console.log('number', number);
    console.log('compare', compare);
    return number == compare;
}
console.log( 'Compare fn:', isEqualTo() );


// ARROW FUNCTION AND "THIS"
// Arrow Function keeps it's original context
// Traditional functions assigns it to whatever calls it, ie: button-elements
const BUTTON1 = document.querySelector('button');
const BUTTON2 = document.querySelector('#btn2');

var arrFunc = () => console.log('arrFunc', this);

function tradFunc() {
    console.log('tradFunc', this);
}

BUTTON1.addEventListener('click', tradFunc);
BUTTON2.addEventListener('click', arrFunc);


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