/**
 * @fileoverview A file containing the card model and related functions
 * and errors.
 */

/**
 * A map of allowable card numbers based on shape.
 * @type {Object.<string, Array.<number>}
 */
const ALLOWABLE_CARDS = {
  square: [1, 2, 3, 5, 7, 10, 11, 13, 14],
  circle: [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14],
  triangle: [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14],
  cross: [1, 2, 3, 5, 7, 10, 11, 13, 14],
  star: [1, 2, 3, 4, 5, 7, 8],
  whot: [20, 20, 20, 20, 20]
};

/**
 * A map of card actions to action functions.
 * @type {Object.<number, function(Game): void>}
 */
const CARD_ACTIONS = {
  1: holdOn,
  2: pickTwo,
  5: pickThree,
  8: suspendNextPlayer,
  14: generalMarket,
  20: demandCard
};

/**
 * Whot card model
 * @class
 */
class Card {
  /**
   * Creates an instance of a card
   * @constructor
   * @param {string} shape - The cards shape/suite
   * @param {number} number - The cards corresponding number
   * @param {function(Game): void} [action=null] - Action function
   * @param {boolean} [autoAssignAction=false] - Whether to assign action to cards by default
   */
  constructor (
    shape,
    number,
    action = null,
    autoAssignAction = false
  ) {
    shape = shape.toLowerCase();
    if (!(Object.keys(ALLOWABLE_CARDS).includes(shape))) {
      throw new Error(`Invalid shape '${shape}'`);
    }
    this.shape = shape;
    const validNumbers = ALLOWABLE_CARDS[shape];
    if (!(validNumbers.includes(number))) {
      throw new Error(`Invalid number '${number}'' for shape '${shape}'`);
    }
    this.number = number;

    if (action !== null) {
      this.action = action;
      return;
    }

    if (
      autoAssignAction === true &&
      Object.keys(CARD_ACTIONS).includes(number)
    ) {
      this.action = CARD_ACTIONS[number];
      return;
    }
    this.action = null;
  }
}

/**
 * Forces players wait for current player to continue play
 * @param {Game} game - The game instance being acted on
 */
function holdOn (game) {
  /** @todo: Add game logic */
}

/**
 * Forces next player pick two cards
 * @param {Game} game - The game instance being acted on
 */
function pickTwo (game) {
  /** @todo: Add game logic */
}

/**
 * Forces next player pick three cards
 * @param {Game} game - The game instance being acted on
 */
function pickThree (game) {
  /** @todo: Add game logic */
}

/**
 * Forces next player to forcefully skip turn
 * @param {Game} game - The game instance being acted on
 */
function suspendNextPlayer (game) {
  /** @todo: Add game logic */
}

/**
 * Forces all players except current player pick one card
 * @param {Game} game - The game instance being acted on
 */
function generalMarket (game) {
  /** @todo: Add game logic */
}

/**
 * Forces next player to play a card of a shape decided by
 * current player
 * @param {Game} game - The game instance being acted on
 */
function demandCard (game) {
  /** @todo: Add game logic */
}

module.exports = { Card };
