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
    let checkWinner = (line, currentPlayer) => {
        let result = null;
        let [a, b] = line.getAttribute('coordinates').split(',');
        result = createsTriangle(currentPlayer, a, b);
        console.log(result);
    }

    let createsTriangle = (player, aInitial, bInitial) => {
        let triangle = [];
        triangle.push([aInitial, bInitial]);

        let possibilites = [];

        for (let a = 1; a < 7; a++) {
            if (bInitial != a) {
                possibilites.push(a);
            }
        }

        for (let p of possibilites) {
            
        }

        return triangle;
    }

    /* 
        @param level - nth line of the triangle
        @param player - the player that marked [aInitial, bInitial]
    */
    /* let createsTriangle = (level, player, aInitial, bInitial, aCurrent, bCurrent) => {
        console.log(`level: ${level}, player: ${player}, aInitial: ${aInitial}, bInitial: ${bInitial}, aCurrent: ${aCurrent}, bCurrent: ${bCurrent}`);

        if (level == 2) {
            console.log(`hi2`);
            if (boardMap.has(`${aInitial},${bCurrent}`)) {
                if (player === boardMap.get(`${aInitial},${bCurrent}`)) {
                    return true;
                }
            }

            return false;
        }

        aCurrent = bCurrent;
        for (let i = aCurrent + 1; i < 7; i++) {
            if (boardMap.has(`${aCurrent},${i}`)) {
                return createsTriangle(level + 1, player, aInitial, bInitial, aCurrent, i);
            }
        }

        return false;
    } */

    return Object.assign(
        {},
        {
            checkWinner,
            resetBrain,
            updateBrain,
        },
    );
})();

// Controls the game flow
const director = (() => {
    currentPlayer = 0; // 0 = player1 | 1 = player2

    let makeMove = (line) => {
        console.clear();
        if (line.getAttribute('marker') !== '') {
            console.log(`Invalid move`);
            return;
        }

        board.updateBrain(line, currentPlayer);
        displayController.updateMarker(line, currentPlayer);
        currentPlayer = 1 - currentPlayer;
        displayController.updateCurrentPlayer(currentPlayer);
        board.checkWinner(line, currentPlayer);
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