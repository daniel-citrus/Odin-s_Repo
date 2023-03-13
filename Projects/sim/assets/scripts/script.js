const lines = document.querySelectorAll('.line');

// Board brain
const board = (() => {
    const boardMap = new Map();

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
    /* let checkLoser = (currentPlayer) => {
        console.clear();
        let result = null;
        let losingPlayer = null;
        let losingTriangle = null;

        // Checks the entire boardMap for a winning triangle
        for (let [line, player] of boardMap) {
            let [a, b] = line.split(',');
            [result, losingPlayer] = createsTriangle(1, currentPlayer, +a, +b, +a, +b);

            if (result) {
                break;
            }
        }
        console.log(`Result: ${result}, Loser: ${losingPlayer}`);
    } */

    /* 
        **All incoming parameter values must be integers**
        @param level - nth line of the triangle
        @param player - the player that marked [aInitial, bInitial]
        @return - true, if triangle is found and the losing player
    */
    /* let createsTriangle = (level, player, aInitial, bInitial, aCurrent, bCurrent) => {
        if (!boardMap.has(`${aCurrent},${bCurrent}`)) {
            return [false, null]
        }

        if (player != boardMap.get(`${aCurrent},${bCurrent}`)) {
            return [false, null];
        }

        console.log(`Player: ${player}, a: ${aCurrent}, b:${bCurrent}`);

        if (level == 2) {
            if (boardMap.has(`${aInitial},${bCurrent}`)) {
                if (player == boardMap.get(`${aInitial},${bCurrent}`)) {
                    return [true, player];
                }
                return [false, null];
            }
            return [false, null];
        }

        aCurrent = bCurrent;
        for (let i = aCurrent + 1; i < 7; i++) {
            let [result, loser] = createsTriangle(level + 1, player, aInitial, bInitial, aCurrent, i);

            if (result) {
                return [result, loser];
            }
        }

        return [false, null];
    } */

    let checkLoser = (line, currentPlayer) => {
        let [a, b] = line.getAttribute('coordinates').split(',');
        let result = createsTriangle(1, currentPlayer, +a, +b, +a, +b);

        if (result) {
            let winner = (currentPlayer) ? "Blue" : "Red";

            console.log(`${winner} wins!`);
        }

    }

    let createsTriangle = (level, player, aI, bI, aC, bC) => {
        if (!boardMap.has(`${aC},${bC}`)) {
            return false;
        }

        if (player != boardMap.get(`${aC},${bC}`)) {
            return false;
        }

        if (level == 2) {
            let a, b;
            a = aC;
            b = aI;

            if (a > b) {
                [a, b] = swap(a, b);
            }

            if (boardMap.has(`${a},${b}`)) {
                if (player == boardMap.get(`${a},${b}`)) {
                    return true;
                }
            }

            return false;
        }

        for (let i = 1; i < 7; i++) {
            let a, b;

            if (a == i || b == i) {
                continue;
            }

            a = bC;
            b = i;

            if (a > b) {
                [a, b] = swap(a, b);
            }

            if (boardMap.has(`${a},${b}`)) {
                if (player == boardMap.get(`${a},${b}`)) {
                    if (createsTriangle(level + 1, player, aI, bI, a, b)) {
                        return true;
                    }
                }
            }
        }
    }

    /* Swaps two variables and returns them */
    let swap = (a, b) => {
        return [b, a];
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
        /* board.checkLoser(currentPlayer); */
        board.checkLoser(line, currentPlayer);
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
        { makeMove },
        { restartGame },
    )
})();

// Controls the front-end
const displayController = (() => {
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
    }

    let updateCurrentPlayer = (player) => {
        let board = document.querySelector('.board');

        (player) ? board.classList.add('p2') : board.classList.remove('p2');
    }

    // Updates 'marker' attribute value
    let updateMarker = (line, player) => {
        line.setAttribute('marker', player);
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