const lines = document.querySelectorAll('.line');

let bot = () => {
    let dumbMove = () => {
        let map = board.getBoardMap();
    }

    let normalMove;
    let smartMove;

    return {
        dumbMove,

    }
};

const board = (() => {
    const boardMap = new Map();
    let possibleMoves = [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6],
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
        [3, 4],
        [3, 5],
        [3, 6],
        [4, 5],
        [4, 6],
        [5, 6]
    ];
    let losingTriangle = [];

    /* Checks the entire boardMap for a winning triangle */
    let checkLoser = (currentPlayer) => {
        let result = null;

        for (let [line, player] of boardMap) {
            losingTriangle = [];

            if (player != currentPlayer) {
                continue;
            }

            let [a, b] = line.split(',');
            losingTriangle.push([+a, +b]);
            result = createsTriangle(1, currentPlayer, +a, +b, +a, +b);

            if (result) {
                break;
            }
        }

        return [
            result,
            losingTriangle
        ]
    }

    /* 
        Recursive function that will check whether or not triangle exists starting on line aInitial to bInitial.

        **All incoming parameter values must be integers**
        @param level - nth line of the triangle
        @param player - the player that marked [aInitial, bInitial]
        @param aInitial - starting point of the line marked by player
        @param bInitial - end point of the line marked by player
        @param a - current line's starting point
        @param b - current line's end point
        @return (boolean, value) - true, if triangle is found and the losing player
    */
    let createsTriangle = (level, player, aInitial, bInitial, a, b) => {
        if (!boardMap.has(`${a},${b}`)) {
            return false;
        }

        if (player != boardMap.get(`${a},${b}`)) {
            return false;
        }

        // Condition for a complete triangle
        if (level == 2) {
            if (!boardMap.has(`${aInitial},${b}`)) {
                return false;
            }

            if (player == boardMap.get(`${aInitial},${b}`)) {
                losingTriangle.push([aInitial, b]);
                return true;
            }

            return false;
        }

        a = b;
        for (let i = a + 1; i < 7; i++) {
            let result = createsTriangle(level + 1, player, aInitial, bInitial, a, i);

            if (result) {
                losingTriangle.push([a, i]);
                return result;
            }
        }

        return false;
    }

    let getBoardMap = () => {
        return boardMap;
    }

    let getPossibleMoves = () => {
        return possibleMoves;
    }

    let resetBrain = () => {
        boardMap.clear();

        possibleMoves = [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [1, 6],
            [2, 3],
            [2, 4],
            [2, 5],
            [2, 6],
            [3, 4],
            [3, 5],
            [3, 6],
            [4, 5],
            [4, 6],
            [5, 6]
        ];
    }

    let updateBrain = (line, marker) => {
        line = line.getAttribute('coordinates');
        boardMap.set(line, marker);

        let [a, b] = line.split(',');
        
        updatePossibleMoves(+a, +b);
    }

    /* Removes line a->b from the possible moves */
    let updatePossibleMoves = (a, b) => {
        for (let move in possibleMoves) {
            if (a == possibleMoves[move][0] && b == possibleMoves[move][1]) {
                possibleMoves.splice(move, 1);
            }
        }
    }

    return Object.assign(
        {},
        {
            checkLoser,
            getBoardMap,
            getPossibleMoves,
            resetBrain,
            updateBrain,
        },
    );
})();

// Controls the game flow
const director = (() => {
    currentPlayer = 0; // 0 = player1 | 1 = player2

    let b = bot();

    let endGame = (winner, losingTriangle) => {
        winner = (winner) ? 'Red' : 'Blue';
        console.log(`Winner: ${winner}, Triangle: ${losingTriangle}`);
    }

    // Analyse the current player's move to see if they lost
    let makeMove = (line) => {
        console.clear();

        if (line.getAttribute('marker') !== '') {
            console.log(`Invalid move`);
            return;
        }

        board.updateBrain(line, currentPlayer);
        displayController.updateMarker(line, currentPlayer);

        let [gameOver, losingTriangle] = board.checkLoser(currentPlayer);

        if (gameOver) {
            endGame(1 - currentPlayer, losingTriangle);
        }

        currentPlayer = 1 - currentPlayer;
        displayController.updateCurrentPlayer(currentPlayer);


        b.dumbMove();
    }

    let restartGame = () => {
        currentPlayer = 0;
        displayController.resetBoard();
        board.resetBrain();
    }

    return Object.assign(
        {},
        {
            makeMove,
            restartGame
        },
    )
})();

// Controls the front-end
const displayController = (() => {
    let board = document.querySelector('.board');
    let z_index = 1; // Most recently marked line will appear above all other lines

    // Initialize eventListeners for each line
    for (let l of lines) {
        l.addEventListener('click', () => {
            director.makeMove(l);
        })
    }

    let clearBoard = () => {
        for (let l of lines) {
            l.setAttribute('marker', '')
        }
    }

    let disableBoard = () => {
        board.classList.add('disabled');
    }

    let resetBoard = () => {
        clearBoard();
        updateCurrentPlayer(0);
        z_index = 1;
    }

    let updateCurrentPlayer = (player) => {
        (player) ? board.classList.add('p2') : board.classList.remove('p2');
    }

    // Updates 'marker' attribute value
    let updateMarker = (line, player) => {
        line.setAttribute('marker', player);
        line.style.zIndex = z_index;
        z_index++;
    }

    return Object.assign(
        {},
        {
            disableBoard,
            resetBoard,
            updateCurrentPlayer,
            updateMarker
        },
    )
})();