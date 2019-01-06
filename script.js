console.log('::TRY/CATCH/THROW/RETURN ERROR::');
// Using try and catch for managing errors - So the loop can keep going
function *gen3(end) {
    for (let i = 0; i < end; i++) {
        try {
            yield i;
        } catch(error) {
            console.log('The error:', error)
        }
    }
}
let it5 = gen3(3);
console.log(it5.next());
console.log(it5.throw('An error, which is nice')); // Throw method for errors
// .return =  Returns custom value inside "value" (Note: check browser compatibility)
console.log(it5.return('An error, which is nice')); // Returns custom value inside "value" (Note: check browser)
console.log(it5.next());
console.log(it5.next());
console.log(it5.next());




console.log('::WRITING A DYNAMIC GENERATOR ITERATOR::');
let obj = {
    [Symbol.iterator] : gen
}
function *gen() {
    yield 1;
    yield 2;
}

for (const element of obj) {
    console.log(element);
}

// Passing values and looping inside generator function
function *gen2(end) {
    for (let i = 0; i < end; i++) {
        yield i;
    }
}
let it4 = gen2(2);
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());



console.log('::GENERATORS::');
// Generator is a function but with a star/asterics
function *select() {
    // Generator require yield keyword. Works like "return"
    yield 'House';
    yield 'Garage';
}
// *select() returns a iterator < Can be accessed with next()
let it3 = select();
console.log(it3);
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());



console.log('::CUSTOM ITERABLE OBJECT::');
// Making a custom iterable from scratch
let person = {
    name: 'Hannes',
    hobbies: ['Sports', 'Cooking'],
    [Symbol.iterator]: function() {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function() {
                let value = hobbies[i];
                i++;
                return {
                    done: i > hobbies.length ? true : false, // Important to avoid infinite loops
                    value: value
                };
            }
        };
    }
}
for (const hobby of person) {
    console.log(hobby);
}



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