// var sayHello = function(name) {
//     console.log('Hello ' + name);
//   };

// sayHello("Jesse")

// Utilizing ES6 arrow functions, colloquially fat arrow functions, we can rewrite it as such:

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// };

// sayHello("Jesse")

// const sayHello = name => console.log(`Hello ${name}`);

// sayHello("Jesse")

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// *** New Example *** //

// var square = function(n) {
//   return n * n;
// };


// will become

// const square = n => n * n;


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// *** New Example *** //
// to return an object

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
  return { 
      firstName: 'John',
      lastName: 'Wick'
  }
}
/**
* The example below wouldn't work because the 
* brackets are interpreted as opening the body of the 
* function rather than brackets to create an object literal 
*/
const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// surrounding the implicit return with parentheses solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

class Deck {
  constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
    for (const suit of suits) {
      for (const face of faces) {
        deck.push(this.createCard(suit, face));
      }
    }
    this.deck = deck;
  }
  createCard(suit, face) {
    return face + " of " + suit;
  }
}

// We'll start refactoring for a more functional approach using forEach, 
// but continue using traditional anonymous functions.

class Deck {
  constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
    suits.forEach(function(suit) {
      faces.forEach(function(face) {
        deck.push(this.createCard(suit, face));
      });
    });
    this.deck = deck;
  }
  createCard(suit, face) {
    return face + " of " + suit;
  }
}

// Creating a new Deck will now result in a TypeError: 
// TypeError: Cannot read property 'createCard' of undefined, 
// because this in our anonymous functions don't have the same context as our loops.

// We can fix this issue with arrow functions like so:

class Deck {
  constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
    suits.forEach(suit => {
      faces.forEach(face => {
        deck.push(this.createCard(suit, face));
      });
    });
    this.deck = deck;
  }
  createCard(suit, face) {
    return face + " of " + suit;
  }
}

