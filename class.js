console.log('::CLASS STRUCTURE::');

class Helper {
    static logTwice(message) {
        console.log('Log twice:');
        console.log(message);
        console.log(message);
    }
}

// let helper = new Helper(); // Instanciation is Not needed when the method is "static"
Helper.logTwice('Logged');

class Person {
    constructor(name, middleName) {
        this.name = name;
        this._middleName = middleName;
    }
    greet() {
        console.log('Hello there, my name is ' + this.name + ' and I am ' + this.age);
    }

    get middleName() {
        return this._middleName.toUpperCase();
    }

    set middleName( value ) {
        if (value.length > 2) {
            this._middleName = value;
        } else {
            console.log('Rejected the name ')
        }
    }

}

let person = new Person('Hannes', 'Johannes');

console.log('GETTERS AND SETTERS:', person);

person.middleName = 'J';
console.log('Accessing the Getter (uppercase)', person.middleName);


class Hannes extends Person {
    constructor(age) {
        super('Hannes'); // Calls the parent constructor to child class
        this.age = age;
    }
    greet() {
        console.log('Hello...');
    };
    greetTwice() {
        console.log('Greeting twice:');
        super.greet(); // super can also call methods
        this.greet();
    }
}

let hannes = new Hannes(31);
hannes.greetTwice();

console.log( 'What prototype? ', hannes.__proto__ === Hannes.prototype);