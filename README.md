Connect4
==========

## what is Connect4?

Connect4 is a simple and functional Javascript subset of code that models a Connect 4 game between two players.

## usage

To run the program, simply copy and paste the contents of connect4.js into any Javascript console, such as the one found in Chrome by pressing F12.

## getting started

To create a gameboard with a width of 7 and a height of 5.

> var gameboard = new GAMEBOARD.Gameboard(7,5);

Display the current state of the gameboard.

> gameboard.printState();

Place pieces in different columns of the board.

> gameboard.placePiece('O',2);
> gameboard.placePiece('X',3);
> gameboard.placePiece('O',2);
> gameboard.placePiece('X',3);

**Note that 'O' and 'X' represent the 2 players.

Check whether a placed piece led to a victory.

> console.log(gameboard.placePiece('O',1));

**Note that gameboard.placePiece(player,col) will return _undefined_ if nobody has won, _X_ if player X has won, and _O_ if player O has won.**

## Exceptions Thrown

- placing a piece on an out of range column
- the same player placing pieces down twice in a row
- attempting to put a piece in a column that is already filled to the top
- using a player string representation other than 'X' or 'O'






