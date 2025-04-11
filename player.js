const { Hand, PlayStack } = require('./collections');
const { Game } = require('./game');

class Player {
  /** @type {Hand} */
  hand;
  /** @type {PlayStack} */
  playStack;
  /** @type {boolean} */
  hasPlayed;
  /**
   * Creates a player
   * @constructor
   * @param {string} name - Player's name
   * @param {Game} game - Game object
   */
  constructor (name, game) {
    this.name = name;
    this.game = game;
    this.hasPlayed = false;
    this.hand = new Hand();
  }

  makePlay() {
    /**
     * @todo Logicfor making play as AI
     */
  }
  /**
   * @todo: a player pick function and a effect object to know
   * what has been done to a player.
   */

}

module.exports = { Player };
