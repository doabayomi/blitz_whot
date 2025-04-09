const { Deck, Table } = require('./collections');
const { Player } = require('./player');
const {
  ACTION_CARDS_ENABLED,
  STARTING_CARD_ACTION_ALLOWED,
  PLAYER_KNOCKING_ENABLED
} = require('./constants');

class Game {
  /** @type {Deck} */
  deck;
  /** @type {Array.<Player>} */
  players;
  /** @type {Table} */
  table;
  /** @type {Player} */
  currentPlayer; nextPlayer;
  /** @type {boolean} */
  hasEnded = false;
  /**
   *
   * @param {number} numberOfPlayers - number of players
   * @param {number} deckMultiplier - number of decks to mutiply by
   * @param {number} startingPlayerHandCount - number of cards each player start with
   */
  constructor (numberOfPlayers, deckMultiplier, startingPlayerHandCount) {
    // create attributes;
    this.players = [];
    this.deck = new Deck(deckMultiplier, ACTION_CARDS_ENABLED);
    this.table = new Table();

    // initialize players
    this.initializePlayers(numberOfPlayers);
    // shuffle cards
    this.deck.shuffle(2);

    // distribute cards
    for (
      let playerIndex = 0;
      playerIndex < this.players.length; playerIndex++
    ) {
      const playertoReceiveCards = this.players[playerIndex];

      for (let cardsGiven = 0;
        cardsGiven < startingPlayerHandCount; cardsGiven++
      ) {
        const removedCard = this.deck.removeCard();
        playertoReceiveCards.hand.addCard(removedCard);
      }
    }

    // place starting card on table
    let startingCard = this.deck.removeCard();
    while (
      !(STARTING_CARD_ACTION_ALLOWED) &&
      startingCard.action != null
    ) {
      this.deck.addCard(startingCard);
      this.deck.shuffle();
      startingCard = this.deck.removeCard();
    }
    this.table.addCard(startingCard);

    // Decide on who starts first
    this.currentPlayer = this.players[0];

    // take effect on game if starting card is an action card
    if (startingCard.action != null) {
      startingCard.action(this);
    }
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

  runGame () {
    while (!(this.hasEnded)) {
      // wait for a player to play
      while (!this.currentPlayer.hasPlayed) {
        this.waitForPlayer(this.currentPlayer);
      }
  
      // confirm if play is valid based on knocking
      const playIsValid = this.currentPlayer.playStack.isValidPlay(
        this.table[this.table.length - 1]
      );
      if (playIsValid) {
        this.currentPlayer.playStack.takeAction(this);
        this.table.addCard(this.currentPlayer.playStack);
        this.nextTurn();
        /** @todo add knocking condition */

        if (this.deck.cards.length == 0) {
          this.hasEnded = true;
          break;
        }
      }
    }
    this.endGame()
  }

  waitForPlayer (player) {
    /** @todo Logic for player waiting to play/AI playing. */
    player.makePlay();
  }

  endGame() {
    /** @todo Added endgame protocol */
  }
}


module.exports = { Game };