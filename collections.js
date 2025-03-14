const { Card } = require('./card');

class Collection {
  /** @type {Array.<Card>} */
  cards;

  constructor () {
    this.cards = [];
  }

  /**
   * Adds a card to the top of the collection
   * @param {Card | Card[]} card - Card to add to the top of the deck.
   */
  addCard (card) {
    this.cards.unshift(card);
  }

  removeCard (card) {
    throw new Error('removeCard must have an implementation');
  }
}

class Hand extends Collection {}

class PlayStack extends Collection {}

class Deck extends Collection {
  constructor (deckMultiplier = 1, allowActionCards = false) {

  }
  /**
   * Shuffles the cards in the deck
   */
  shuffle () {
    this.cards.sort(() => Math.random() - 0.5);
  }
}

class Table extends Collection {
  /**
   * @todo Possible penalty implementation to game logic
   */
}

module.exports = { Hand, Table, Deck, PlayStack };
