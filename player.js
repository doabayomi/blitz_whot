const { Hand, PlayStack } = require('./collection');
const { Game } = require('./game');

class Player {
  /** @type {Hand} */
  hand;
  /** @type {PlayStack} */
  playStack;

  /**
   * Creates a player
   * @constructor
   * @param {string} name - Player's name
   * @param {Game} game - Game object
   */
  constructor (name, game) {
    this.name = name;
    this.game = game;
  }

  // TODO: add pick function
}

module.exports = { Player };
