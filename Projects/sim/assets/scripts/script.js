const lines = document.querySelectorAll('.line');

// Board brain
const board = (() => {
    const boardMap = new Map();
    let losingTriangle = null;

    let resetBrain = () => {
        boardMap.clear();
        /*
        for (let l of lines) {
            boardMap.set(l.getAttribute('coordinates'), '');
        }
        */
    }

    let updateBrain = (line, marker) => {
        boardMap.set(line.getAttribute('coordinates'), marker);
    }

    /*
        Checking pattern
        (1, 2->5)
        (2, 3->6)
        (1, 3)
    */
    let checkLoser = (currentPlayer) => {
        console.clear();
        let result = null;
        let losingPlayer = null;

        // Checks the entire boardMap for a winning triangle
        for (let [line, player] of boardMap) {
            if (player != currentPlayer) {
                continue;
            }

            let [a, b] = line.split(',');
            [result, losingPlayer] = createsTriangle(1, currentPlayer, +a, +b, +a, +b);

            if (result) {
                break;
            }
        }
        console.log(`Result: ${result}, Loser: ${losingPlayer}`);
    }

    /* 
        **All incoming parameter values must be integers**
        @param level - nth line of the triangle
        @param player - the player that marked [aInitial, bInitial]
        @return - true, if triangle is found and the losing player
    */
    let createsTriangle = (level, player, aInitial, bInitial, a, b) => {
        if (!boardMap.has(`${a},${b}`)) {
            return [false, null]
        }

        if (player != boardMap.get(`${a},${b}`)) {
            return [false, null];
        }

        if (level == 2) {
            if (boardMap.has(`${aInitial},${b}`)) {
                if (player == boardMap.get(`${aInitial},${b}`)) {
                    return [true, player];
                }
                return [false, null];
            }
            return [false, null];
        }

        a = b;
        for (let i = a + 1; i < 7; i++) {
            let [result, loser] = createsTriangle(level + 1, player, aInitial, bInitial, a, i);

            if (result) {
                return [result, loser];
            }
        }

        return [false, null];
    }

    return Object.assign(
        {},
        {
            checkLoser,
            resetBrain,
            updateBrain,
        },
    );
})();

// Controls the game flow
const director = (() => {
    currentPlayer = 0; // 0 = player1 | 1 = player2

    let makeMove = (line) => {
        if (line.getAttribute('marker') !== '') {
            console.log(`Invalid move`);
            return;
        }

        board.updateBrain(line, currentPlayer);
        displayController.updateMarker(line, currentPlayer);
        board.checkLoser(currentPlayer);
        currentPlayer = 1 - currentPlayer;
        displayController.updateCurrentPlayer(currentPlayer);
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
    let ZINDEX = 1;
    
    // Initialize eventListeners for each line and add a custom attribute called 'marker' that represets player1('0') or player2('1') markings (default value = '')
    for (let l of lines) {
        l.addEventListener('click', () => {
            director.makeMove(l);
        })

        l.setAttribute('marker', '');
    }

    let clearBoard = () => {
        for (let l of lines) {
            l.setAttribute('marker', '')
        }
    }

    let resetBoard = () => {
        clearBoard();
        updateCurrentPlayer(0);
        ZINDEX = 1;
    }

    let updateCurrentPlayer = (player) => {
        let board = document.querySelector('.board');

        (player) ? board.classList.add('p2') : board.classList.remove('p2');
    }

    // Updates 'marker' attribute value
    let updateMarker = (line, player) => {
        line.setAttribute('marker', player);
        line.style.zIndex = ZINDEX;
        ZINDEX++;
    }

    return Object.assign(
        {},
        {
            resetBoard,
            updateCurrentPlayer,
            updateMarker
        },
    )
})();