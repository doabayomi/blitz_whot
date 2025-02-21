/** @module Cards object modules */

/**
 * Whot card class
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
    this.shape = shape;
    this.number = number;
  }
}

module.exports = { Card };
