const { Deck } = require('./collection');
const { Player } = require('./player');

class Game {
  /** @type {Deck} */
  deck;
  /** @type {Array.<Player>} */
  players;
  /**
   *
   * @param {number} numberOfPlayers - number of players
   */
  constructor (numberOfPlayers) {
    for (let index = 0; index < numberOfPlayers; index++) {
      const player = new Player('Player' + String(index + 1), this);
      this.players.push(player);
    }
  }
}
