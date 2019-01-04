console.log('::CLASS STRUCTURE::');

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello there, my name is ' + this.name);
    }
}

let person = new Person('Hannes');

person.greet();

console.log( 'What prototype? ', person.__proto__ === Person.prototype);