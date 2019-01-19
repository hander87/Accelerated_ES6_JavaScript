console.log('SET()');
// Set only holds ONE unique value. Duplicates gets omitted.

let set = new Set([1,2,1,2]);

set.add(3); // Adds values with .add()

set.delete(1); // Deletes the value (even though you have "duplicates")
console.log( set.has(1) ); // instead of "get"

for (const item of set) {
    console.log(item);
}



console.log('WEAKMAP()');

let cardAce1 = {
    name: 'Ace of Spades'
};
let cardKing1 = {
    name: 'King of Hearts'
};

let key1 = { a:1 };
let key2 = { b:2 };

let deck1 = new WeakMap(); // Uses Objects as keys
deck1.set(key1, cardAce1); // Set key to an object. Extract with .get
deck1.set(key2, cardKing1);

console.log('deck', deck1.get(key1));



console.log('MAP() - Get:ers and Set:ers');

let cardAce = {
    name: 'Ace of Spades'
};
let cardKing = {
    name: 'King of Hearts'
};

let deck = new Map();
deck.set('as', cardAce); // Set key to an object. Extract with .get
deck.set('kc', cardKing);

console.log('deck', deck);
console.log('deck.size', deck.size);
console.log('deck.get', deck.get('as'));

// Keys
console.log('key()');
for ( key of deck.keys() ) { // See keys that are stored in map
    console.log('key loop', key);
}
for ( value of deck.values() ) {
    console.log('value loop', value); // See values stored in map
}
for ( entry of deck ) { // equivilent to deck.entries()
    console.log('entry loop', entry); // See whole object
}

deck.delete('as'); // Clear item with .delete
console.log('deck', deck);
deck.clear('as'); // Clear ALL items with .clear
console.log('deck', deck);

