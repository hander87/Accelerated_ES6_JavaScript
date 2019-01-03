// Let allows "Block Scoping"

let age = 31;
if (true) {
    let age = 27;
    console.log('Inside', age);
}

console.log('Outside', age);