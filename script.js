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

