console.log('::ACCESSING ITERATOR::');
let array2 = [1, 2, 3];

// Changing the metadata with symbols/meta-programming
// Accessing the iterator behaviour on its next() function
array2[Symbol.iterator] = function() {
    let nextValue = 10;

    return {
        next: function() {
            nextValue++;
            return { // Overide the default values for done/value
                done: nextValue > 15 ? true : false,
                value: nextValue
            };
        }
    };
}
for (let element of array2) {
    console.log(element);
}

console.log('nexts:')
let it2 = array2[Symbol.iterator](); 
console.log(it2.next()); 
console.log(it2.next()); 
console.log(it2.next()); 
console.log(it2.next()); 



console.log('::ITERATOR SYMBOL::');
let array = [1, 2, 3];

// Iterator Symbol Type for checking if var is iterable
let it = array[Symbol.iterator](); 

// It is a object, that has function "next()" on it
// calling next will "Iterate" through the variable
console.log(it.next()); 
console.log(it.next()); 
console.log(it.next()); 
console.log(it.next()); 
console.log('value = the number of loops we´ve done');
console.log('done = means if we´re done looping the array');