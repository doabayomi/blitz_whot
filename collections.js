const { Card, ALLOWABLE_CARDS } = require('./card');

class Collection {
  /** @type {Array.<Card>} */
  cards;

  constructor () {
    this.cards = [];
  }

  /**
   * Adds a card to the top of the collection
   * @param {Card} card - Card to add to the top of the deck.
   */
  addCard (card) {
    this.cards.push(card);
    /**
     * @todo add behaviour for arrays of cards and not just
     * individual cards
    */
  }

  /**
   * Base/Abstract class to remove a card.
   * @param {Card|number} cardOrIndex - Card object or index of the card
   */
  removeCard (cardOrIndex) {
    throw new Error('removeCard must have an implementation');
  }
}

class Hand extends Collection {
  /**
   * Removes a card
   * @param {Card} card - Card object to remove from hand
   * @returns Card if it exists in Hand. Throws error otherwise
   */
  removeCard (card) {
    const cardIndex = this.cards.indexOf(card);
    if (cardIndex !== -1) {
      return this.cards.splice(cardIndex);
    }
    throw new Error('Card doesn\'t exist in Hand');
  }
}

class PlayStack extends Collection {
  /**
   * Removes a card
   * @param {Card} card - Card object to remove from playstack
   * @returns Card if it exists in PlayStack. Throws error otherwise.
   */
  removeCard (card) {
    const cardIndex = this.cards.indexOf(card);
    if (cardIndex !== -1) {
      return this.cards.splice(cardIndex);
    }
    throw new Error('Card doesn\'t exist in PlayStack');
  }

  isValidPlay (topCardOnTable) {
    let previousCard = topCardOnTable;
    for (let index = 0; index < this.cards.length; index++) {
      const nextCard = this.cards[index];

      if (
        nextCard.number !== previousCard.number ||
        nextCard.shape !== previousCard.shape
      ) {
        return false;
      }

      previousCard = nextCard;
    }
    return true;
    /**
     * @todo Implement validation logic with action cards evaluation
     * to confirm if a play is valid.
     */
  }

  takeAction (game) {
    /**
     * @todo Implmenent logic for taking equivalent action on game
     */
  }
}

class Deck extends Collection {
  /**
   * Creates a deck of cards.
   * @param {number} deckMultiplier - Number of decks to multiply by
   * @param {boolean} allowActionCards - Whether to auto assign actions to cards
   */
  constructor (deckMultiplier = 1, allowActionCards = false) {
    super();
    for (let i = 0; i < deckMultiplier.length; i++) {
      this.initializeDeck(allowActionCards);
    }

    this.shuffle();
  }

  /**
   * Creates a single standard deck of cards.
   * @param {boolean} allowActionCards - Whether to auto assign actions.
   */
  initializeDeck (allowActionCards = false) {
    for (const shape in ALLOWABLE_CARDS) {
      if (Object.prototype.hasOwnProperty.call(ALLOWABLE_CARDS, shape)) {
        const validNumbers = ALLOWABLE_CARDS[shape];

        validNumbers.forEach(number => {
          this.cards.addCard(
            new Card(shape, number, null, allowActionCards)
          );
        });
      }
    }
  }

  /**
   * Shuffles the deck
   * @param {number} noOfTimes - Number of times to shuffle card
   */
  shuffle (noOfTimes = 1) {
    for (let trials = 0; trials < noOfTimes.length; trials++) {
      this.cards.sort(() => Math.random() - 0.5);
    }
  }

  /**
   * Removes the oldest card (bottom card) from the deck.
   * @returns Card at bottom of the ceck
   */
  removeCard () {
    return this.cards.shift();
  }
}

class Table extends Collection {
  removeCard () {
    /**
     * @todo Add card removals based on penalties and/or finished
     * decks
     */
  }
  /**
   * @todo Possible penalty implementation to game logic
   */
}

module.exports = { Hand, Table, Deck, PlayStack };
