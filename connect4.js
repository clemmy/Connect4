var GAMEBOARD = GAMEBOARD || {}; //GAMEBOARD namespace

/**
 * Constructs a Connect 4 game board with the specified width and height, with player turn set to 'O'
 * @param width
 * @param height
 * @constructor
 */
GAMEBOARD.Gameboard = function(width, height) {
    this.innerStruct = []; //inner struct is accessed by innerStruct[width][height]
    this.height = height;
    this.width = width;
    this.playerTurn = 'O';
    // initialize all location states on the game board to '*'
    for (var i=0; i<width; ++i) {
        this.innerStruct.push([]);
        for (var h=0; h<height; ++h) {
            this.innerStruct[i].push(new GAMEBOARD.LocationState('*'));
        };
    };
};

/**
 * An object that represents a location on the gameboard (can take the values 'O', 'X', and '*'
 * @param state
 * @constructor
 */
GAMEBOARD.LocationState = function(state) {
    if (state!='*' && state!='O' && state!='X')
        throw "Invalid state";
    this.state = state; //can be O, X, or * (player 1, 2, or none)
};

/**
 * Prints the current state of the gameboard
 */
GAMEBOARD.Gameboard.prototype.printState = function() {
    for (var y=this.height-1; y>=0; --y) { // initialize to last index of rectangular height
        console.log(this.innerStruct.map(function (col) {
            //console.log(cols[y]);
            return col[y].state;
        }).join(' '));
    }
};

/**
 * Checks for winner around where the last piece was placed
 * @param x column
 * @param y row
 */
GAMEBOARD.Gameboard.prototype.checkForWinner = function(x,y) { //remember boundary checks
    // check vertical
    for (var outer=0; outer<4; ++outer) {
        var count_O = 0;
        var count_X = 0;
        for (var inner=0; inner<4; ++inner) {
            if ((y+outer-inner)>=this.height || (y+outer-inner)<0) {
                continue;
            }
            else if (this.innerStruct[x][y+outer-inner].state == '*') {
                break;
            }
            else if (this.innerStruct[x][y+outer-inner].state == 'O') {
                count_O++;
            }
            else {
                count_X++;
            }
        }
        if (count_O==4)
            return 'O';
        else if (count_X==4)
            return 'X';
    }
    // check horizontal
    for (var outer=0; outer<4; ++outer) {
        var count_O = 0;
        var count_X = 0;
        for (var inner=0; inner<4; ++inner) {
            if ((x+outer-inner)>=this.width || (x+outer-inner)<0) {
                continue;
            }
            else if (this.innerStruct[x+outer-inner][y].state == '*') {
                break;
            }
            else if (this.innerStruct[x+outer-inner][y].state == 'O') {
                count_O++;
            }
            else {
                count_X++;
            }
        }
        if (count_O==4)
            return 'O';
        else if (count_X==4)
            return 'X';
    }
    // check topLeftToRightDown diagonal

    // check bottomLeftToRightTop diagonal

};

/**
 * Places piece at specified column (0-based index)
 * @param player 'X' or 'O'
 * @param col
 */
GAMEBOARD.Gameboard.prototype.placePiece = function(player, col) { //check col limit
    if (player != this.playerTurn)
        throw "Illegal move - not player "+player+"'s turn";
    if (col < 0 || col > this.width)
        throw "Column out of range";
    if (player!='X' && player!='O')
        throw "Invalid player";
    if (this.innerStruct[col][this.height-1].state != '*')
        throw "This column is full";

    var index = this.innerStruct[col].map(function(el) {
        return el.state;
    }).indexOf('*');
    this.innerStruct[col][index].state = player;

    //pass turn
    if (this.playerTurn == 'O')
        this.playerTurn = 'X';
    else
        this.playerTurn = 'O';

    console.log(this.checkForWinner(col, index));
};

var gameboard = new GAMEBOARD.Gameboard(7,5);
gameboard.printState();
gameboard.placePiece('O',2);
gameboard.placePiece('X',3);
gameboard.placePiece('O',2);
gameboard.placePiece('X',3);
gameboard.placePiece('O',2);
gameboard.placePiece('X',3);
gameboard.placePiece('O',1);
gameboard.placePiece('X',6);
gameboard.placePiece('O',1);
gameboard.placePiece('X',4);
gameboard.placePiece('O',1);
gameboard.placePiece('X',5);
gameboard.printState();


