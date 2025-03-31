<div style="text-align: center;">

  ![alt text](./logo.png "Our logo")
  :construction: Work in Progress :construction:

  # Blitz Whot: The Card Game
</div>

## Introduction
The goal of this project currently is to create a game logic model for a variation of the Whot Card Game

This variation includes the following concepts
* Using action cards
* Stacking multiple cards in a single play based on either shape or number (as long as it isn't an action card or the eventual effect of the action doesn't stop the current player's play). 


This particular concept of _stacking_ is what makes this particular variation exciting. Typical whot game variations limit stacking to only number most of the time and make it one can only play a single card at a time when it comes to shape.
e.g. 4 :star: -> 4:red_circle: or 10 :black_square_button: -> 10 :heavy_plus_sign: 

However in this variation, a person can, for example, play 
4 :star: -> 4 :red_circle: -> 3 :red_circle: -> 3 :heavy_plus_sign:
in a single move!

These two concepts makes the game more unpredictable as one play can turn the tables instantly and also creates very short, quick and thrilling games. This also makes having more cards not to be considered a handicap.

There are certain conditions that you can edit by changing their values in `constants.js`
* Whether to allow action cards in the first place
* Starting the game with a action or non-action card as starting card.
* Whether an opposing player has to knock to force a play to be validated (evaluated) or the game auto-validates each play.
* Having to have a last card before checking up.
* Game ending conditions (what happens when the deck is used up or when somebody checks up).

## Features
Right now, I'm focusing on building a game logic engine that can run a simple computer vs. computer match. It's all about simulating player moves using straightforward rules, and I plan to set up a basic UI to show the game state and help with testing.


Possible future integrations would be:
* Building the game on a game engine
* Integrating mulitplayer gameplay
* Intelligent game AI to play with computer
* Customizable variations in gameplay
