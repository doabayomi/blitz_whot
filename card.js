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

function name (params) {

}

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
   */
  constructor (shape, number) {
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
  }
}

module.exports = { Card };
