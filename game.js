const { Deck, Table } = require('./collections');
const { Player } = require('./player');
const { ACTION_CARDS_ENABLED, STARTING_CARD_ACTION_ALLOWED } = require('./constants');

class Game {
  /** @type {Deck} */
  deck;
  /** @type {Array.<Player>} */
  players;
  /** @type {Table} */
  table;
  /**
   *
   * @param {number} numberOfPlayers - number of players
   * @param {number} deckMultiplier - number of decks to mutiply by
   * @param {number} startingPlayerHandCount - number of cards each player start with
   */
  constructor (numberOfPlayers, deckMultiplier, startingPlayerHandCount) {
    this.players = [];
    this.initializePlayers(numberOfPlayers);
    // initialize cards
    this.deck = new Deck(deckMultiplier, ALLOW_ACTION_CARDS);
    this.deck.shuffle(2);

    // distribute cards
    for (
      let playerIndex = 0;
      playerIndex < this.players.length; playerIndex++
    ) {
      const playertoReceiveCards = this.players[index];

      for (let cardsGiven = 0;
        cardsGiven < startingPlayerHandCount; cardsGiven++
      ) {
        let removedCard = this.deck.removeCard();
        playertoReceiveCards.hand.addCard(removedCard);
      }
    }

    // create table
    this.table = new Table()

    // place starting card on table
    let startingCard = this.deck.removeCard();
    if s
    this.table.addCard(startingCard);
  }

  /**
   * Sets up the players for a game instance
   * @param {number} numberOfPlayers - Number of players in the game
   */
  initializePlayers (numberOfPlayers) {
    for (let index = 0; index < numberOfPlayers; index++) {
      const player = new Player('Player' + String(index + 1), this);
      this.players.push(player);
    }
  }
}
