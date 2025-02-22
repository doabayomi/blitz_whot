const { Card } = require('./card');

class Collection {
  /** @type {Array.<Card>} */
  cards;

  constructor () {
    this.cards = [];
  }

  /**
   * Adds a card to the collection of card
   * @param {number} position - Position on the collection to add
   * @param {Card} card - The card to play
   */
  addCard (position = 'top', card) {
    if (position === 'top') {
      this.cards.push(card);
    } else if (position === 'bottom') {
      this.cards.unshift(card);
    }
  }

  /**
   * Removes a card from the collection
   * @param {string} position - Position on the collection to remove
   * @param {number} numberOfCards - Number of cards to remove
   * @returns {Card} Removed card
   */
  removeCard (position = 'top', numberOfCards = 1) {
    if (position === 'top') {
      const removedCard = this.cards.pop();
      return removedCard;
    } else if (position === 'bottom') {
      const removedCard = this.cards.shift();
      return removedCard;
    }
  }
}

class Hand extends Collection {
  constructor () {
    super();
  }
}

class PlayStack extends Collection {
  constructor () {
    super();
  }
}

class Deck extends Collection {
  constructor () {
    super();
  }

  shuffle () {
    this.cards.sort(() => Math.random() - 0.5);
  }
}

class Table extends Collection {
  constructor () {
    super();
  }

  // TODO: a penalty function after first tests.
}

module.exports = { Hand, Table, Deck, PlayStack };
